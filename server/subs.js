Meteor.publish('news',function(){
	 return newsList.find();
});