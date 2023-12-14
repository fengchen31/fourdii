{
  test: /\.js$/,
  exclude: function(modulePath) {
    return /node_modules/.test(modulePath) &&
        !/node_modules\/MY_MODULE/.test(modulePath);
  }
}