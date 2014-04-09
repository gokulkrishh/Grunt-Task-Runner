
module.exports = function(grunt) {

/**========================================
 * Grunt config
===========================================**/

grunt.initConfig({

	//get config from package.json file
	pkg: grunt.file.readJSON('package.json'),

	//config
	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},

		// when this task run, it will lint all js files in js folder
		build: ['Gruntfile.js', 'app/**/*.js']
	}

});

/**========================================
 * Grunt Plugins
===========================================**/

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');


};