module.exports = { // TODO настроить карты для css
  extract: true,
  plugins: [
    require('postcss-import'),
    require('postcss-omit-import-tilde'),
    require('postcss-url')({
      url: 'inline',
    }),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-strip-units'),
    require('postcss-calc'),
    require('postcss-color-function'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-inherit'),
    require('cssnano')
  ],
};