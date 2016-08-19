"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router",
    "pictures"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("pictureIndex", {
      url: "/pictures",
      templateUrl: "js/pictures/index.html",
      controller: "PictureIndexController",
      controllerAs: "PictureIndexViewModel"
    })
    .state("pictureShow", {
      url: "/pictures/:id",
      templateUrl: "js/pictures/show.html"
    });
  }
}());
