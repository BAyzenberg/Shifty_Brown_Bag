'use strict';

module.exports = ['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.when('', '/home');
  $urlServiceProvider.rules.when('/', '/home');
  // TODO: confirm that extra routes are not necissary

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
    },
    {
      name: 'about',
      url: '/about',
      template: require('../view/about/about.html'),
      controller: 'AboutController',
      controllerAs: 'aboutCtrl',
    },
    {
      name: 'schedule',
      url: '/schedule',
      template: require('../view/schedule/schedule.html'),
      controller: 'ScheduleController',
      controllerAs: 'scheduleCtrl',
    },
  ];
  routes.forEach($stateProvider.state);
}];
