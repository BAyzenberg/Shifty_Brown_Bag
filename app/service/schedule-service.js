'use strict';

module.exports = [
  '$q',
  '$log',
  function($q, $log) {
    $log.debug('#schedule-service');

    let service = {};

    // TODO: Add gmail interactions
    // NOTE: might required access to Vnv's work email information

    // TODO: get calendar with private information

    service.getSchedule = () => {

    };

    // TODO: send schedule request

    service.sendRequest = () => {

    };

    return service;
  },
];
