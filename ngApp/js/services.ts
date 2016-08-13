namespace app.Services {

  //MovieService
  export class MovieService {
    public MovieResource;
    constructor(
      private $resource: ng.resource.IResourceService
    ) {
      this.MovieResource = $resource('/api/movies/:id')
    }

    public save(movie) {
      return this.MovieResource.save(movie).$promise;
    }

    public getAll(user){
      return this.MovieResource.query({id:user})
    }

    public remove(id){
      return this.MovieResource.remove({id: id}).$promise;
    }

  }

  export class UserService {
    private UserResource;

    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.UserResource = $resource('/api/users')
    }

    public login(user){
      return this.UserResource.save(user).$promise;
    }
  }

  //UserService
  angular.module('app').service('movieService', MovieService);
  angular.module('app').service('userService', UserService);

}
