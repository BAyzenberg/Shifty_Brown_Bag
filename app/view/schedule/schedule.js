'use strict';

module.exports = [
  '$log',
  function($log) {
    this.$onInit = () => {
      $log.log('Schedule');

      this.title = 'Schedule an appointment today';

      this.getSchedule();
    };
  },
];
