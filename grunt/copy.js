module.exports = {
	build: {
		files: [
			// Copy un-minified production JS
			{ src: '.tmp/concat/js/production-min.js', dest: '<%= appconfig.dest %>/js/production.js', filter: 'isFile' }
		]
	}
};