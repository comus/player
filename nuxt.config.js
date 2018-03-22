/* eslint-disable */

module.exports = {
  head: {
    title: 'Pictionary player',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [{ src: '~/assets/stylesheets/application.scss', lang: 'scss' }],
  build: {
    extend(config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      vueLoader.options.loaders.scss = [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./assets/stylesheets/_shared.scss'],
          },
        },
      ];

      config.module.rules.push({
        test: /icons\.js$/,
        use: ['vue-style-loader', 'css-loader', 'webfonts-loader'],
      });

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  modules: ['@nuxtjs/proxy'],
  plugins: ['~/assets/icons.js'],
  proxy: [
    process.env.API_URL,
  ],
  watchers: {
    webpack: {
      poll: true, // Enable webpackDevMiddleware file polling for Windows
    },
  },
};
