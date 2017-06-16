import _ from 'lodash';

class BlogsController {
  constructor(PostService, $state) {
    this.message = 'The latest from the blog!';
    this.PostService = PostService;
    this.PostService.firstPost = this.PostService.firstPost || 0;
    this.PostService.groupCount = 10;
    console.log(`firstPost: ${this.PostService.firstPost}`);

    this.$state = $state;
    $('li.dropdown').removeClass('open');
    $('.pager li').removeClass('disabled');

    console.log(`allPosts.length: ${this.PostService.allPosts.length}`);

    if (this.PostService.allPosts.length == 0) {
      this.PostService.get().then(() => {
        this.PostService.allPosts = this.PostService.loadPosts();
        // console.log(this.PostService.allPosts);
      });
    }
  }

  onSelect(postId) {
    this.$state.go('blogs.detail', { postId: postId });
  }

  firstPosts() {
    this.PostService.firstPost = 0;
  }

  lastPosts() {
    this.PostService.firstPost = this.PostService.allPosts.length - (this.PostService.allPosts.length % this.PostService.groupCount) - this.PostService.groupCount;
  }

  showNext() {
    return (this.PostService.firstPost + this.PostService.groupCount) < this.PostService.allPosts.length;
  }

  showPrev() {
    return this.PostService.firstPost >= this.PostService.groupCount;
  }

  prevPosts() {
    if (this.showPrev()) {
      this.PostService.firstPost -= this.PostService.groupCount;
    }
  }

  nextPosts() {
    if (this.showNext()) {
      this.PostService.firstPost += this.PostService.groupCount;
    }
  }
}

BlogsController.$inject = ['PostService', '$state'];
// could also just export the class up top as well
export { BlogsController };
