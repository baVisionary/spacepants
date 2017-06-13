import {detailDirective} from './detail.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const detail = angular.module('detail', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blog.detail', {
      url: `/:postId`,
      parent: 'blog',
      views: {
          '@': {
            template: '<detail></detail>'
          }
      }
    });
  })
  .directive('detail', detailDirective);