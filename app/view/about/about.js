'use strict';

module.exports = [
  '$log',
  function($log) {
    this.$onInit = () => {
      $log.log('in the about');

      this.title = 'Dean Picozzi';

      this.imgUrl = null; // TODO: Get a good picture to include

      this.desc = 'Something nice about dean, where he came from why he\'s qualified';
    };
  },
];
