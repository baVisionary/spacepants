import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
  });

  describe('controller', ()=> {
  });

  describe('template', ()=> {
    // get creative
  });
});
