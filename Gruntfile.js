'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    grunt.initConfig({
        clean: {
            build: {
                src: ['build']
            }
        },
        svgmin: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.svg'],
                    dest: 'build/min'
                }]
            }
        },
        svgstore: {
            all: {
                options: {
                    cleanup: ['fill'],
                    includedemo: true
                },
                files: {
                    'build/sprite.svg': ['build/min/*.svg'],
                }
            }
        }
    });


    grunt.registerTask('default', ['clean:build', 'svgmin', 'svgstore']);
};
