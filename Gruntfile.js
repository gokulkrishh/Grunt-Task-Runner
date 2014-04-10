
module.exports = function(grunt) {

/**========================================
 * Grunt config
===========================================**/

grunt.initConfig({

	//get config from package.json file
	pkg: grunt.file.readJSON('package.json'),

	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},
		build: ['Gruntfile.js', 'app/**/*.js']
	},

	// uglify to minify the files
	uglify: {
		options: {
			banner: '/* <%= grunt.template.date() %> */\n'
		},

		// when task run's, it will minify all js files to build folder accordingly
		build: {
			files: {
				'build/js/all.min.js' : 'app/**/*.js'
			}
		}
	},
	// To minify css
	cssmin: {
		options: {
			banner: '/* <%= grunt.template.date() %> */\n'
		},
		build: {
			files: {
				'build/css/style.min.css' : 'app/css/*.css'
			}
		}
	},

});

/**========================================
 * Grunt default command to run all task
===========================================**/

grunt.registerTask('default', ['jshint','uglify','cssmin']);

/**========================================
 * Grunt Plugins
===========================================**/

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');


};