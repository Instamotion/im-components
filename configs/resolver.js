const fs = require('fs');
const path = require('path');
const resolveFrom = require('resolve-from');

const wpResolver = require('enhanced-resolve').ResolverFactory.createResolver({
  fileSystem: fs,
  useSyncFileSystemCalls: true,
  mainFields: ['main'],
  extensions: ['.js', '.ts', '.tsx', '.svg'],
});

module.exports = function resolver(modulePath, params) {
  if (modulePath.startsWith('.') || modulePath.startsWith(path.sep)) {
    try {
      return resolveFrom(params.basedir, modulePath);
    } catch (e) {}
  }

  let alternativeEntryModulePath;
  const paths = modulePath.split('/');
  const [, moduleName] = paths;

  if (modulePath.startsWith('@im-ui/')) {
    alternativeEntryModulePath = `@im-ui/${moduleName}/src`;
  }

  let result = wpResolver.resolveSync(
    {},
    params.basedir,
    alternativeEntryModulePath || modulePath,
  );

  if (result) {
    result = fs.realpathSync(result);
  }

  return result;
};
