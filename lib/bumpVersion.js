const fs = require('fs');
const query = require('bolt-query');
const inquirer = require('inquirer');

function getPkgVersion(pkgName) {
  return query({
    workspaceFiles: {
      pkgs: 'package.json',
    }
  }).then(result => {
    const pkg = result.workspaces.filter(p => p.pkg.name === pkgName)[0];
    if (pkg && pkg.pkg) {
      return pkg.pkg.version;
    }
    throw new Error(`Pkg ${pkgName} was not found`);
  })
}

function bumpPkgVersion(pkgName, newVersion) {
  return query({
    workspaceFiles: {
      pkgs: 'package.json',
    }
  }).then(result => {
    const {pkg, pkgPath} = result.workspaces.filter(p => p.pkg.name === pkgName)[0];
    if (pkg) {
      pkg.version = newVersion;
      return fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    }
    throw new Error(`Pkg ${pkgName} was not found`);
  })
}

function getAllPkgs() {
  return query({
    workspaceFiles: {}
  })
  .then(result => result.workspaces.map(p => p.pkg.name));
}

function updateDependandPkgs(pkgName, newVer) {
  return query({
    workspaceFiles: {
      pkgs: 'package.json',
    }
  }).then(result => {
    result.workspaces
    .filter(({ pkg }) => pkg.name !== pkgName)
    .forEach(p => {
      const pkg = {...p.pkg};
      const pkgPath = p.pkgPath;
      if (pkg.dependencies && pkg.dependencies[pkgName]) {
        console.log(`Bumping dep in ${pkg.name} : ${pkg.dependencies[pkgName]} -> ${newVer}`);
        pkg.dependencies[pkgName] = newVer;
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      }

      if (pkg.devDependencies && pkg.devDependencies[pkgName]) {
        console.log(`Bumping dev dep in ${pkg.name} : ${pkg.devDependencies[pkgName]} -> ${newVer}`);
        pkg.devDependencies[pkgName] = newVer;
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      }

      if (pkg.peerDependencies && pkg.peerDependencies[pkgName]) {
        console.log(`Bumping peer dep in ${pkg.name} : ${pkg.peerDependencies[pkgName]} -> ${newVer}`);
        pkg.peerDependencies[pkgName] = newVer;
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      }
    })
  })
}

async function main() {
  const appPkgs = await getAllPkgs();
  inquirer.prompt([
    {
      type: 'list',
      name: 'pkgToBump',
      message: 'Which pkg to bump',
      choices: appPkgs,
      pageSize: 20,
      filter: async (inp) => {
        const ver = await getPkgVersion(inp);
        return {
          name: inp,
          oldVer: ver
        };
      }
    },
    {
      type: 'input',
      name: 'newVersion',
      message: (ans) => {
        return `Old version is ${ans.pkgToBump.name}@${ans.pkgToBump.oldVer}. What's new ver?`;
      },
      validate: (inp) => {
        if (inp === '') {
          return 'Please, specify a new verion';
        }
        if (inp.split('.').length !== 3) {
          return `You specified ${inp}. Please, specify a semver-formatted verion: x.y.z`;
        }
        return true;
      }
    }
  ])
  .then(async ans => {
    await bumpPkgVersion(ans.pkgToBump.name, ans.newVersion);
    await updateDependandPkgs(ans.pkgToBump.name, ans.newVersion);
  })
  .catch(e => console.error(e));
}

main();
