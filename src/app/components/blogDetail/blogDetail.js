import {blogDetailDirective} from './blogDetail.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const blogDetail = angular.module('blogDetail', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blogs.detail', {
      url: '/:postId',
      parent: 'blogs',
      views: {
            '@': {
              template: '<blog-detail></blog-detail>',
            }
      }
    });
  })
  .directive('blogDetail', blogDetailDirective);
