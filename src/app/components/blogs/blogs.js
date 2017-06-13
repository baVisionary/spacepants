import {blogsDirective} from './blogs.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const blogs = angular.module('blogs', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blogs', {
      url: '/blogs',
      template: '<blogs></blogs>'
    });
  })
  .directive('blogs', blogsDirective);
