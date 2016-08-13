namespace app.Controllers {

  //HomeController
  export class HomeController {
    public movies;
    public user;

    constructor(private movieService: app.Services.MovieService) {
      this.user = localStorage.getItem("id");
      this.movies = this.movieService.getAll(this.user);
    }
  }

  //AddMovieController
  export class AddMovieController {
    public user;
    public movie;
    public id;

    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      if($stateParams) {
        this.id = $stateParams['id'];
      }
      this.user = localStorage.getItem("id")
    }

    public save() {
      let params = {
        title: this.movie.title,
        genre: this.movie.genre,
        id: this.id,
        user: this.user
      };

      this.movieService.save(params).then((res) => {
        this.$state.go("Home");
      })
    }
  }

  export class DeleteMovieController {
    public id;


    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService
    ) {
      if($stateParams) {
        this.id = $stateParams['id'];
    }
  }

  public remove(){
    this.movieService.remove(this.id).then(() => {
      this.$state.go("Home");
    })
    }
  }

  export class LoginController {
    public user;

    constructor(
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {

    }

    public login(){
      this.userService.login(this.user).then((res) => {
        localStorage.setItem("id", res._id)
        console.log(res);
        this.$state.go('Home')
      })
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
