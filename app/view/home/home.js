'use strict';

module.exports = [
  '$log',
  function($log) {
    this.$onInit = () => {
      $log.log('got into the home page');

      this.title = 'How a massage can help you (placeholder)';

      this.content = 'This is just a placehoder';
    };
  },
];
