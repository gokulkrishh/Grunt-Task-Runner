
module.exports = function(grunt) {

/**========================================
 * Grunt config
===========================================**/

grunt.initConfig({

	//get config from package.json file
	pkg: grunt.file.readJSON('package.json'),

	//create a development server to test
	connect: {
    server: {
      options: {
        port: 9000,
        base: './build',
        livereload: true,
        open: true,
      }
    }
  },

  copy: {
    html: {
      expand: true,
      cwd: 'app/',
      src: ['**/*.html'],
      dest: 'build/'
    }
  },

  //check js hint error
	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},
		build: ['app/js/*.js', 'app/js/**/*.js']
	},

	// uglify to minify the files
	uglify: {
		options: {
			banner: '/* <%= grunt.template.date() %> */\n' //add date to top of file
		},

		// when task run's, it will minify all js files to build folder accordingly
		build: {
			files: {
				'build/js/all.js' : ['app/js/*.js', 'app/js/**/*.js']
			}
		}
	},

	// To minify css
	cssmin: {
		options: {
			banner: '/* <%= grunt.template.date() %> */\n' //add date to top of file
		},
		build: {
			files: {
				'build/css/styles.css' : ['app/css/*.css', 'app/css/**/*.css']
			}
		}
	},

	// To watch file change and do uglify and minify on the changed file
	watch: {
    options: {
      livereload: true,
    },
		scripts: {
	    files: ['app/js/*.js', 'app/js/**/*.js'],
	    tasks: ['jshint', 'uglify'],
	    options: {
	      spawn: false,
	    },
  	},
  	css: {
  		files: ['app/css/*.css', 'app/css/**/*.css'],
	    tasks: ['cssmin']
  	},
    html: {
      files: ['app/*.html', 'app/**/*.html'],
      tasks: ['copy']
    }
	}

});

/**========================================
 * Grunt default command to run all task
===========================================**/

grunt.registerTask('default', ['copy', 'cssmin', 'jshint', 'uglify', 'connect', 'watch']);

/**========================================
 * Grunt Plugins
===========================================**/

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-copy');

};