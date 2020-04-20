$(document).ready(function () {
  const api = 'https://api.sheety.co/2673e735-e781-4499-81ed-99c52ee0ea61';
  $.getJSON(api, function (data) {
    var template = Handlebars.compile($('#item-template').html());
    $('#items').html(template(data));
  });
});
