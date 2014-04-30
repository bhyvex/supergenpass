/* Grunt task aliases */

module.exports = function(grunt) {

  grunt.registerTask(
    'default',
    [
      'jshint',
      'browserify',
      'uglify',
      'cssmin',
      'staticinline',
      'bookmarklet',
      'qunit',
      'manifest',
      'checksum'
    ]
  );

  grunt.registerTask(
    'test',
    [
      'jshint:tests',
      'qunit'
    ]
  );

};
