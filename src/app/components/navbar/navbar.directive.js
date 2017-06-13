import {NavbarController as controller} from './navbar.controller';
import template from './navbar.html';

export const navbarDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
