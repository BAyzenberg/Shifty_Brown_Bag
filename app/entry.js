'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');

require('@uirouter/angularjs');

const dp = angular.module('dp', ['ui.router']);

let context = require('./config/', true, /\.js$/);

context.keys().forEach(path => dp.config(context(path)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => dp.controller(pascalcase(path.basename(key, '.js')), context(key)));

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => dp.service(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./componeent/', true, /\.js$/);
context.keys().forEach(key => dp.component(camelcase(path.basename(key, '.js')), context(key)));
