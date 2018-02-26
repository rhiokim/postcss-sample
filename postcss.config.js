module.exports = {
  plugins: [
      require('precss'),
      require('autoprefixer'),
      require('postcss-import'),
      require('postcss-assets')({
        loadPaths: ['images', 'fonts'],
        basePath: 'static/',
        baseUrl: '/static',
        cachebuster: true
      })
  ]
}