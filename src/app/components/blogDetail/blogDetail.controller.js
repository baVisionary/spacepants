import _ from 'lodash';

class BlogDetailController {
  constructor(PostService, UserService, $state) {
    this.PostService = PostService;
    this.UserService = UserService;

    this.postId = $state.params.postId;

    this.loadDetails(this.postId);
    // if (this.PostService.allPosts.length > 0) {
    //   this.post = this.PostService.allPosts.find(x => x.id == this.postId);
    // } else {
    //   this.PostService.getPostById(this.postId).then(() => {
    //     this.post = this.PostService.loadOnePost();
    //     console.log(this.post);
    //   });
    // }

    // this.UserService.getUser(this.postId).then((data) => {
    //   this.user = this.UserService.loadUser();
    //   console.log(this.user);
    // });

  }

  loadDetails(postId) {
    if (this.PostService.allPosts.length > 0) {
      this.post = this.PostService.allPosts.find(x => x.id == postId);
    } else {
      this.PostService.getPostById(postId).then(() => {
        this.post = this.PostService.loadOnePost();
        // console.log(this.post);
      });
      this.PostService.get().then(() => {
        this.PostService.allPosts = this.PostService.loadPosts();
      });
    }

    this.UserService.getUser(this.postId).then(() => {
      this.user = this.UserService.loadUser();
      // console.log(this.user);
    });
  }

  // support a next button on the UI
  nextPost() {
    console.log(`next ${this.postId} last ${this.PostService.allPosts.length}`)
    if (this.postId < this.PostService.allPosts.length) {
      this.postId++;
      this.loadDetails(this.postId);
    }
  }

  // support previous button on the UI
  previousPost() {
    console.log(`prev ${this.postId}`)

    if (this.postId > 1) {
      this.postId--;
      this.loadDetails(this.postId);
    }
  }

}

BlogDetailController.$inject = ['PostService', 'UserService', '$state'];

// could also just export the class up top as well
export { BlogDetailController };
