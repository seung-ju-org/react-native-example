module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '#apis': './apis',
          '#app': './app',
          '#aws': './aws',
          '#assets': './assets',
          '#commons': './commons',
          '#components': './components',
          '#contexts': './contexts',
          '#hooks': './hooks',
          '#mocks': './mocks',
          '#libs': './libs',
          '#pages': './pages',
          '#prisma': './prisma',
          '#public': './public',
          '#stores': './stores',
          '#queries': './queries',
          '#styles': './styles',
          '#types': './types',
          '#ui': './ui',
          '#utils': './utils',
        },
      },
    ],
  ],
};
