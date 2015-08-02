module.exports = function(grunt) {
  
  grunt.initConfig({
    sass: {                              // Task
     	dist: {                            // Target
        	options: {                       // Target options
          		style: 'expanded'
        	},
        	files: {                         // Dictionary of files
          		'dist/css/main.css': 'src/styles/main.scss'       // 'destination': 'source'        
      		}
      	}
    },
    watch: {
		css: {
			files: '**/*.scss',
			tasks: ['sass'],
      options: {
        atBegin: true
      }
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

};