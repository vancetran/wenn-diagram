module.exports = {
	dev: {
		options: {
			paths: ["<%= appconfig.src %>/less/"],
			cleancss: false,
			ieCompat: true
		},
		files: {
			"<%= appconfig.src %>/css/bootstrap-ucop.css": "<%= appconfig.src %>/less/bootstrap-ucop.less",
			"<%= appconfig.src %>/css/bootstrap-ucnet.css": "<%= appconfig.src %>/less/bootstrap-ucnet.less"
		}
	},
	dist: {
		options: {
			paths: ["<%= appconfig.src %>/less/"],
			cleancss: true,
			ieCompat: true
		},
		files: {
			"<%= appconfig.dest %>/css/bootstrap-ucop-min.css": "<%= appconfig.src %>/less/bootstrap-ucop.less",
			"<%= appconfig.dest %>/css/bootstrap-ucnet-min.css": "<%= appconfig.src %>/less/bootstrap-ucnet.less"
		}
	},
	noMin: {
		options: {
			paths: ["<%= appconfig.src %>/less/"],
			cleancss: false,
			ieCompat: true
		},
		files: {
			"<%= appconfig.dest %>/css/bootstrap-ucop.css": "<%= appconfig.src %>/less/bootstrap-ucop.less",
			"<%= appconfig.dest %>/css/bootstrap-ucnet.css": "<%= appconfig.src %>/less/bootstrap-ucnet.less"
		}
	}
};