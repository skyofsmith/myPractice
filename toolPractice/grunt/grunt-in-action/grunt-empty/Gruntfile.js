'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,

        copy: {
            dist: {
                /* files: {
                    '<%= config.dist %>/index.html': '<%= config.app %>/index.html',
                    '<%= config.dist %>/js/index.js': ['<%= config.app %>/js/index.js']
                } */
                /* files: [
                    {
                        src: '<%= config.app %>/index.html',
                        dest: '<%= config.dist %>/index.html'
                    },
                    {
                        src: '<%= config.app %>/js/index.js',
                        dest: '<%= config.dist %>/js/index.js'
                    }
                ] */
                files: [
                    {
                        expand: true,
                        //源文件路径
                        cwd: '<%= config.app %>/',
                        //源文件格式
                        src: '*.html',
                        //目标文件路径
                        dest: '<%= config.dist %>/',
                        //目标文件后缀
                        ext: '.min.html',
                        //从第几个.来加后缀 'first': 从第一个开始,'last':从最后一个
                        extDot: 'last',
                    },
                    {
                        expand: true,
                        cwd: '<%= config.app %>/',
                        src: '**/*.js',
                        dest: '<%= config.dist %>/',
                        ext: '.js',
                        extDot: 'last',
                        //将中间若干层目录去掉
                        flatten: true,

                        //
                        rename: function (dest, src) {
                            return dest + 'js/' + src;
                        }
                    }
                ]
            }
            /* 
            dist_html: {
                src: '<%= config.app %>/index.html',
                dest: '<%= config.dist %>/index.html'
            },
            dist_js: {
                src: '<%= config.app %>/js/index.js',
                dest: '<%= config.dist %>/js/index.js'
            }
             */
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    '<%= config.app %>/js/index.js',
                    '<%= config.app %>/js/main.js',
                    '<%= config.app %>/js/main2.js'
                ],
                dest: '<%= config.dist %>/js/concated.js'
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '<%= config.dist %>/js/concated.js': [
                        '<%= config.dist %>/js/concated.js'
                    ]
                }
            }
        },
        // offical
        // modernizr: {
        //     dist: {
        //         "dest": "build/modernizr-custom.js",
        //         "parseFiles": true,
        //         "customTests": [],
        //         "devFile": "/PATH/TO/modernizr-dev.js",
        //         "outputFile": "/PATH/TO/modernizr-output.js",
        //         "tests": [
        //             // Tests 
        //         ],
        //         "options": [
        //             "setClasses"
        //         ],
        //         "uglify": true
        //     }
        // },
        modernizr: {
            dist: {
                devFile: '/bower_components/modernizr/modernizr-dev.js',
                outputFile: '/bower_components/modernizr/modernizr-output.js',
                files: {
                    src: [
                    '<%= config.dist %>/js/{,*/}*.js',
                    '<%= config.dist %>/css/{,*/}*.css',
                    '!<%= config.dist %>/js/vender/*',
                    ]
                }, 
                uglify: true
            }
        },
        // offical
        // rev: {
        //     options: {
        //         algorithm: 'md5',
        //         length: 8
        //     },
        //     assets: {
        //         files: [{
        //             src: [
        //                 'img/**/*.{jpg,jpeg,gif,png}',
        //                 'fonts/**/*.{eot,svg,ttf,woff}'
        //             ]
        //         }]
        //     }
        // },
        rev: {
            dist: {
                files: {
                    src: [
                    '<%= config.dist %>/js/{,*/}*.js',
                    '<%= config.dist %>/css/{,*/}*.css'
                    ]
                }
            }
        },

        clean: {

            dist: {
                // src: ['<%= config.dist %>/index.html', '<%= config.dist %>/js/index.js']
                // src: ['<%= config.dist %>/**/*']
                src: ['<%= config.dist %>/**/*'],

                //nodejs 下的Class fs 下的方法
                //filter: 'isFile'
                filter: function (filepath) {
                    return (!grunt.file.isDir(filepath));
                },

                // xxx.xxx
                // dot: true,

                //只匹配文件名 不带路径
                // matchBase: true,

                //动态匹配
                // extend: true
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'concat'
    ]);
};