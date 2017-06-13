import _ from 'lodash';

const postService = ($http, API) => {
  let allPosts = [];
  let post = {};

  // const init = () => {
  //   $http.get(`${API.url}/posts`)
  //   .then(({data}) => {
  //     var tempPosts = data.map(post => {
  //       return post;
  //     });
  //     allPosts.length = 0;
  //     allPosts.push.apply(allPosts, tempPosts);
  //   });
  // }

  const get = () => {
    console.log('GET all posts');
    return $http.get(`${API.url}/posts`)
      .then(({data}) => {
        allPosts = data.map(post => {
          return post;
        });
      });
  };

  const loadPosts = () => {
    console.log('PostService: loading allPosts');
    return allPosts;
  };

  const getPostById = (postId) => {
    console.log('GET post by ID');
      return $http.get(`${API.url}/posts/${postId}`)
      .then(({data}) => {
        post = data;
      });
  };  
  
  const loadOnePost = () => {
    console.log('PostService: loading one post');
    return post;
  } 

  return {get, loadPosts, getPostById, loadOnePost};
};

postService.$inject = ['$http', 'API'];

export {postService};
