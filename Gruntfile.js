module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      cleanup: {
        command: 'rm -rf openwebicons',
      },
      checkout: {
        command: 'git clone https://github.com/pfefferle/openwebicons.git',
      },
      buildDocset: {
        command: 'cheatset generate openwebicons.rb',
      },
      buildTgz: {
        command: 'tar --exclude=\'.DS_Store\' -cvzf openwebicons.tgz openwebicons.docset',
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['shell:cleanup', 'shell:checkout', 'shell:buildDocset', 'shell:buildTgz']);
};
