path = require 'path'
module.exports = (grunt) ->
    config =
        connect:
            server:
                options:
                    port: 8000
                    hostname: '0.0.0.0'
                    base: 'client'

    grunt.initConfig config

    grunt.loadNpmTasks 'grunt-contrib-connect'

    grunt.registerTask 'default', ['connect:server:keepalive']
