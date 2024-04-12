module.exports = {
  plugins: {
    'postcss-preset-env': { 
      stage: '3', 
      features: {
        'logical-properties-and-values': false,
        "opacity-percentage": true,
        "text-decoration-shorthand": true
      } 
    }
  }
}