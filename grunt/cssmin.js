module.exports = {
  minify: {
    expand: true,
    cwd: '.tmp/concat/css/',
    src: ['*.css', '!*.min.css'],
    dest: 'build/css/',
    ext: '.css'
  }
};