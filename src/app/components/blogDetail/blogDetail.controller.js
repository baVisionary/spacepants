import _ from 'lodash';

class BlogDetailController {
  constructor(PostService, UserService, $state) {
    this.PostService = PostService;
    this.UserService = UserService;
    this.post = {};
    this.lastUserId = 0;

    this.postId = $state.params.postId;

    this.loadDetails(this.postId);
  }

  loadDetails(postId) {
    if (this.PostService.allPosts.length > 0) {
      this.post = this.PostService.allPosts.find(x => x.id == postId);
      this.loadUserDetails(this.post.userId);
    } else {
      this.PostService.getPostById(postId).then(() => {
        this.post = this.PostService.loadOnePost();
        this.loadUserDetails(this.post.userId);
      });
      this.PostService.get().then(() => {
        this.PostService.allPosts = this.PostService.loadPosts();
      });
    }
  }

  loadUserDetails(userId) {
    console.log(`lastUserId: ${this.lastUserId} userId: ${userId}`)
    if (userId != this.lastUserId) {
      this.UserService.getUser(userId).then(() => {
        console.log('UserService: loading user')
        this.user = this.UserService.loadUser();
        this.lastUserId = this.post.userId;
      });
    } 
  }

  onReturnBlogs(postId) {
    
  }

  // support a next button on the UI
  showNext() {
    return this.postId < this.PostService.allPosts.length;
  }

  nextPost() {
    console.log(`next ${this.postId} last ${this.PostService.allPosts.length}`)
    if (this.postId < this.PostService.allPosts.length) {
      this.postId++;
      this.loadDetails(this.postId);
    }
  }

  // support previous button on the UI
  showPrev() {
    return this.postId > 1;
  }

  prevPost() {
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
