module.exports = {
	build: {
		files: [{
			expand: true,
			cwd: '<%= appconfig.src %>/images/',
			src: ['**/*.{png,jpg,jpeg,gif}'],
			dest: '<%= appconfig.dest %>/images/'
		}]
	}
};