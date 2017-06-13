import _ from 'lodash';

export class DetailController {
  constructor(PostService, $state) {
    this.PostService = PostService;
    // console.log($state);
    this.postId = parseInt($state.params.postId);
    console.log(this.postId);
    this.post = this.PostService.getById(this.postId);
    console.log(this.post);
  }


}

DetailController.$inject = ['PostService', '$state'];