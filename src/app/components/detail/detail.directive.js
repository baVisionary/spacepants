import template from './detail.html';
import {DetailController as controller} from './detail.controller';

export const detailDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};
