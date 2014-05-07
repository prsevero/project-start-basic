module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: [
                    'static/build/css/*.css',
                ],
                options: {
                    interrupt: true,
                    livereload: true,
                    spawn: false
                },
                tasks: [
                    'minifycss'
                ]
            },
            html: {
                files: [
                    '*.html'
                ],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    'static/build/js/*.js',
                ],
                options: {
                    interrupt: true,
                    livereload: true,
                    spawn: false
                },
                tasks: [
                    'uglifyjs',
                    'hintjs'
                ]
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            minify: {
                files: {
                    'static/css/style.css': [
                        'static/build/css/base.css',
                    ]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'static/js/base.js': [
                        'static/build/js/base.js'
                    ],
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'static/build/js/*.js',
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('minifycss', ['cssmin']);
    grunt.registerTask('uglifyjs', ['uglify']);
    grunt.registerTask('hintjs', ['jshint']);
};
