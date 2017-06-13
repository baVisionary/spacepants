import template from './blogs.html';
import {BlogsController as controller} from './blogs.controller';

export const blogsDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};
