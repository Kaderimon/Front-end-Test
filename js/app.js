(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.reviews = reviews;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(store){
      let Data = new Date();
      let Year = Data.getFullYear();
      let Month = Data.getMonth();
      let Day = Data.getDate();
      
      // Преобразуем месяца
      switch (Month)
      {
        case 0: fMonth="января"; break;
        case 1: fMonth="февраля"; break;
        case 2: fMonth="марта"; break;
        case 3: fMonth="апреля"; break;
        case 4: fMonth="мае"; break;
        case 5: fMonth="июня"; break;
        case 6: fMonth="июля"; break;
        case 7: fMonth="августа"; break;
        case 8: fMonth="сентября"; break;
        case 9: fMonth="октября"; break;
        case 10: fMonth="ноября"; break;
        case 11: fMonth="декабря"; break;
      }
      this.review.date = Day+" "+fMonth+" "+Year;
      store.reviews.push(this.review);
      this.review = {};
    };

});

var reviews = [{
    date: "13 октября 2011",
    body: "Привет, Верунь! ниче себе ты крутая, фотка класс!!!!!!",
    author: "Самуил"
  }, {
    date: "14 октября 2011",
    body: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
    author: "Лилия Семеновна"
  }, {
    date: "14 октября 2011",
    body: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
    author: "Лилия Семеновна"
  }];

})();

