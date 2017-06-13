import template from './blogDetail.html';
import {BlogDetailController as controller} from './blogDetail.controller';

export const blogDetailDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};
