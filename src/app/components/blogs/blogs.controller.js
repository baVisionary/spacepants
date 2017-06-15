import _ from 'lodash';

class BlogsController {
  constructor(PostService, $state) {
    this.message = 'The latest from the blog!';
    this.firstPost = 0;
    this.groupCount = 5;
    this.PostService = PostService;
    this.$state = $state;

    console.log(this.PostService.allPosts.length);

    if (this.PostService.allPosts.length == 0) {
      this.PostService.get().then(() => {
        this.PostService.allPosts = this.PostService.loadPosts();
        console.log(this.PostService.allPosts);
      });
    }
  }

  // paginationLabels() {
  //   var pageLabels = [];
  //   pageLabels[0] = Math.max(this.firstPost - (2 * this.groupCount), 0);
  //   for (var i = 1; i < 5; i++) {
  //     pageLabels[i] = pageLabels[0] + (i * this.groupCount);
  //   }
  //   console.log(pageLabels);
  //   this.pageLabels = pageLabels;
  // }

  onSelect(postId) {
    this.$state.go('blogs.detail', { postId: postId });
  }

  firstPosts() {
    this.firstPost = 0;
  }

  lastPosts() {
    this.firstPost = this.PostService.allPosts.length - (this.PostService.allPosts.length % this.groupCount) - this.groupCount;
  }

  showNext() {
    return (this.firstPost + this.groupCount) < this.PostService.allPosts.length;
  }

  showPrev() {
    return this.firstPost >= this.groupCount;
  }

  prevPosts() {
    if (this.showPrev()) {
      this.firstPost -= this.groupCount;
    }
  }

  nextPosts() {
    if (this.showNext()) {
      this.firstPost += this.groupCount;
    }
  }
}

BlogsController.$inject = ['PostService', '$state'];
// could also just export the class up top as well
export { BlogsController };
