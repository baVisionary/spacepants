import _ from 'lodash';

class BlogDetailController {
  constructor(PostService, UserService, $state) {
    // console.log($state);
    this.PostService = PostService;
    this.postId = $state.params.postId;

    this.PostService.getPostById($state.params.postId).then(() => {
      this.post = this.PostService.loadOnePost();
      console.log(this.post);
    });
  
    this.UserService = UserService;
    this.UserService.getUser(this.postId).then((data) => {
      this.user = this.UserService.loadUser();
      console.log(this.user);
    });
  }
  
}

BlogDetailController.$inject = ['PostService', 'UserService', '$state'];

// could also just export the class up top as well
export {BlogDetailController};
