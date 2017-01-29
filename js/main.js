//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$(document).ready(function() {
  var userInfo = {
    firstName: 'Jane',
    lastName: 'Doe'
  };
  var voteCounts = {
    great: 0,
    greatest: 0,
    total: 0
  };

  //When login button is clicked, the login form is hidden and the users first and last name appears
  $('#loginbutton').click(function() {
    $(".user-fullname").html(userInfo.firstName + " " + userInfo.lastName);
    $('#login-form').hide(500);
    $('.user-info').show(500);
  });


  //Allows the user to view more information, and then hide that information again.
  $('.view-details').click(function() {
    $(this).parent().parent().children('.details').toggle();
    if ($(this).html()!=='Hide details »') {
      $(this).html('Hide details »');
    } else {
      $(this).html('View details »');
    }
  })

  //Updates voting progress bar to reflect user vote clicks.
  $('.voting-buttons .btn').click(function() {
    if ($(this).attr('data-vote') === 'great') {
      voteCounts.great++;
    } else {
      voteCounts.greatest++;
    }
    voteCounts.total++;
    var greatpercentage = ((voteCounts.great / voteCounts.total) * 100) + "%";
    var greatestpercentage = ((voteCounts.greatest / voteCounts.total) * 100) + "%";
    $('.great-progress').css('width', greatpercentage);
    $('.greatest-progress').css('width', greatestpercentage);
  })


});