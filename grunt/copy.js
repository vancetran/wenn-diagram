module.exports = {
  build: {
    files: [
      // Copy all html files
      { expand: true, cwd: '<%= appconfig.src %>',src: '*.html', dest: '<%= appconfig.dest %>/'},
      // Copy un-minified production JS
      { src: '.tmp/concat/js/production-min.js', dest: '<%= appconfig.dest %>/js/production.js', filter: 'isFile' },
      // Copy the CNAME file
      { src: '<%= appconfig.src %>/CNAME', dest: '<%= appconfig.dest %>/CNAME', filter: 'isFile' },
    ]
  }
};