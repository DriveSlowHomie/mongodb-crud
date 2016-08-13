namespace app.Controllers {

  //HomeController
  export class HomeController {
    public movies;

    constructor(private movieService: app.Services.MovieService) {
      this.movies = this.movieService.getAll();
    }
  }

  //AddMovieController
  export class AddMovieController {
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
    }

    public save() {
      let params = {
        title: this.movie.title,
        genre: this.movie.genre,
        id: this.id
      }

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

  angular.module('app').controller('HomeController', HomeController);
}
