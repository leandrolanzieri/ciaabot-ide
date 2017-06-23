module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            blockly: {
                files: {
                    'src/assets/js/blockly/blocks/ciaa_sapi_blocks_compressed.js': [
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/base.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/servo.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/math.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/logic.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/procedures.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/loops.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/variables.js',
                        'src/assets/js/blockly/blocks/ciaa_sapi_blocks/text.js',
                    ],
                    'src/assets/js/blockly/generators/ciaa_sapi_generator_compressed.js': [
                        'src/assets/js/blockly/generators/ciaa_sapi_generator.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/base.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/servo.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/math.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/logic.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/procedures.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/loops.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/variables.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/text.js',
                        'src/assets/js/blockly/generators/ciaa_sapi/control.js',
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
}