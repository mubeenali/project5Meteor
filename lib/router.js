Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('showNews');
});

Router.route('/submitNews', function () {
		
  this.render('formForNews');
  
});

Router.route('/showNewsScreen', function () {
  this.render('showNews');
});

