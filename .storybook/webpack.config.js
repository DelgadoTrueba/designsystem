const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /-story(-(angular|react|vue))?\.[jt]s?$/,
    use: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            printWidth: 80,
            tabWidth: 2,
            bracketSpacing: true,
            trailingComma: 'es5',
            singleQuote: true,
          },
        },
      },
    ],
    enforce: 'pre',
  });

  return config;
};