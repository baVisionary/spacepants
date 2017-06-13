import _ from 'lodash';

const userService = ($http, API) => {
  let user = {};

  const getUser = (userId) => {
    console.log('GET user by ID');
    return $http.get(`${API.url}/users/${userId}`)
      .then(({data}) => {
        // console.log(data)
        user = data;
      });
  };  

  const loadUser = () => {
      return user;
  }

  return {getUser, loadUser};
};

userService.$inject = ['$http', 'API'];

export {userService};
