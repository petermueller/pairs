Meteor.subscribe("people");
Meteor.subscribe("pairs");

Template.registerHelper("equals", function (a, b) {
  return (a == b);
});

Template.registerHelper("isPairsPage", function () {
  return Router.current().route.getName() === undefined;
});

Template.registerHelper("isPeoplePage", function () {
  return Router.current().route.getName() === "people";
});

Template.registerHelper('unpaired', function () {
  return People.find({ 'pairee': null });
});

Template.registerHelper('avatarFor', function (email) {
  if (email == null){
    email = 'meteor@meteor.com';
  }
  return Gravatar.imageUrl(email, { size: 32 });
});

Template.registerHelper( 'pairs', function () {
  return Pairs.find({});
});
