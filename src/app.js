'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-translate';

import IndexComponent from './route/IndexComponent';

import routing from './config/routing';
import translate from './config/translate';

import 'style!css!less!./less/main.less';

angular.module('app', [uiRouter, 'pascalprecht.translate']);

angular.module('app')
  .config(routing)
  .config(translate);

angular.module('app')
  .component('index', IndexComponent);
