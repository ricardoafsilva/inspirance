module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['build'],
            css: ['build/**/*.css', '!build/**/*.min.css'],
        },
        copy: {
            backbone: {
                options: {
                    process: function(content, srcpath) {
                        if(srcpath.indexOf('index.html') > 0) {
                            return content.replace('.css', '.min.css')
                        } else if(srcpath.indexOf('Main.js') > 0) {
                            return content.replace('../../core/dist/bundle', '../core/dist/bundle').replace('../../react/dist/bundle', '../react/dist/bundle')
                        }
                        return content
                    },
                },
                files: [{
                        expand: true,
                        cwd: 'backbone/',
                        src: ['**/*', '!index.html', '!README.md'],
                        dest: 'build/',
                    },
                    {
                        expand: true,
                        cwd: 'backbone/',
                        src: ['./index.html'],
                        dest: 'build/',
                    }
                ]
            },
            core: {
                src: 'core/dist/**/*',
                dest: 'build/',
            },
            react: {
                src: 'react/dist/**/*',
                dest: 'build/',
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'build/',
                    ext: '.min.css',
                }]
            }
        },
        run: {
            build_core: {
                exec: 'cd core && npm install && npm run build',
            },
            build_react: {
                exec: 'cd react && npm install && npm run build',
            },
        },
        babel: {
            options: {
                presets: ["@babel/preset-env"],
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['**/*.js', '!**/*.min.js', '!**/*-min.js', '!**/*bundle.js'],
                    dest: 'build/',
                }],
            }
        }
    })

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-run')

    // Default task(s).
    grunt.registerTask('default', ['clean:build', 'run', 'copy', 'cssmin', 'babel', 'clean:css'])
    grunt.registerTask('dev', ['run'])

}
