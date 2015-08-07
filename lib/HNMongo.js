newsList = new Mongo.Collection("news");

newsList.allow({
  insert: function() {
    return true;
  }
});

newsList.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 50
  },
  url: {
    type: String,
    label: "Url"
  },
  discription:{
    type : String,
    label : "Description" }
}));
