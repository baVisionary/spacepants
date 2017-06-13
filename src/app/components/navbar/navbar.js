import {navbarDirective} from './navbar.directive';
import angular from 'angular';

export const navbar = angular.module('navbar', [])
  .config(function($stateProvider) {
    $stateProvider.state('navbar', {
      template: '<navbar></navbar>'
    });
  })
  .directive('navbar', navbarDirective);
