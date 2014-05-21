module.exports = {
// Commented out, since we're using usemin to automatically compile
	dist: {
		src: '<%= appconfig.dest %>/js/production.js',
		dest: '<%= appconfig.dest %>/js/production.min.js'
	}
};