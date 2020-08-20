module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.scss'],
                    dest: 'dest/css',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            options: {
                mangle: {
                    reserved: ['jQuery', 'Backbone']
                }
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'dest/js'
                }]
            }
        },
        watch: {
            cwd: 'src',
            sass: {
                files: ['**/*.sass'],
                tasks: ['sass']
            },
            scripts: {
                files: ['**/*.js'],
                tasks: ['jshint']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['dest/**/*'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'uglify']);
    grunt.registerTask('watch', ['watch']);
};
