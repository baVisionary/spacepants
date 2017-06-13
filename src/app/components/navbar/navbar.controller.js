// create our controller using the
// highly controversial class
import _ from 'lodash';

class NavbarController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor($location) {
      this.$location = $location;
    }
    isActive(viewLocation) {
      //TODO: grep out the root of location
       return viewLocation == this.$location.path()
    };
}

NavbarController.$inject = ['$location'];
// could also just export the class up top as well
export {NavbarController};
