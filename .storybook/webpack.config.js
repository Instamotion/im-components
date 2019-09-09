var path = require('path');
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader',
    options: {
      configFileName: path.join(__dirname, '..', 'tsconfig.sb.json')
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
