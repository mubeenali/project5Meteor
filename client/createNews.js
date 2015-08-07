Meteor.subscribe('news');
/*
Template.formForNews.events({
  "submit #formf": function (event, template) {
 	//alert("xxsss");

 	var title_ = event.target.newstitle.value; 
 	var url_ = event.target.newsUrl.value;
 	var discription_ = event.target.newsdiscription.value;

 	newsList.insert({
  		
  		title : title_,
  		url : url_,
  		discription : discription_ 
  	});

 }

});
*/
Template.showNews.helpers({
  posts: function () {
    // this helper returns a cursor of
    // all of the posts in the collection
    return newsList.find();
  }
});


Template.loginCheck.helpers({
  posts: function () {
    // this helper returns a cursor of
    // all of the posts in the collection
    return newsList.find();
  }
});