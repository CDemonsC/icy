module.exports = {
  devServer: {
    proxy: {
      '/icym.php': {
        target: 'https://icy.design',
        // ws: true,
        changeOrigin: true

      },
      '/m.php': {
        target: 'https://icy.design',
        // ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}
