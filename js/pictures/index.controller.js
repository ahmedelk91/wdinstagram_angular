"use strict";

(function(){
  angular
  .module("pictures")
  .controller("PictureIndexController", [
    PictureIndexControllerFunction
  ]);

  function PictureIndexControllerFunction(){
    this.pictures = [
      {"imgUrl": "https://s-media-cache-ak0.pinimg.com/564x/6c/dd/7a/6cdd7a91544bfaf8c8a97c77145db4b0.jpg",
      "Author": "Ahmed",
      "Body": "Look at this cute ass feline!"
    },
    {"imgUrl": "https://s-media-cache-ak0.pinimg.com/564x/40/23/f0/4023f00774047d2984606ba9b0e1b310.jpg",
    "Author": "Bill",
    "Body": "This cat is ever cuter!"
  }
]
}
}());
