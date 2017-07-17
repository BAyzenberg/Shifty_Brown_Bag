'use strict';

module.exports = {
  template: require('./calendar.html'),
  controllerAs: 'calendarCtrl',
  controller: [
    '$log',
    'scheduleService',
    function($log, scheduleService) {
      this.$onInit = () => {
        $log.log('calendar');

        this.getSchedule = () => {
          scheduleService.getSchedule();
        };

        this.sendRequest = () => {
          scheduleService.sendRequest();
        };

        this.getSchedule();
      };
    },
  ],
};
