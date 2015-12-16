// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $('#say_hello').click(function(){
    alert('Hello button clicked');
  });

  // Show Div Button logic
  $('.show_info_div').click(function(){
    //Remove class way
    // $('.info_div').removeClass('hide');
    //slideToggle way
    $('.info_div').slideToggle(900, function(){
      if($('.info_div').is(':hidden')){
        $(".show_info_div").text("Show info");
      } else {
        $(".show_info_div").text('Hide Info');
      }
    });
    // .show way
    // $('.info_div').show();
    //toggleClass Way
    // $('.info_div').toggleClass('hide')
  });

  // Change Background
  $('#change_background').click(function(){
    //add class way
    $('body').toggleClass('blue-background');
    //.css way-not best practice
    // $("body").css('background-color', 'blue');
  });

  $('h1').text('Modified by jQuery').slideUp(2000).css('color', 'red').slideDown(2000);

  $('#name').keyup(function(e){
    $('#live_name').text($(this).val());
  });

  $('#birthdate').change(function(){
    var pickedDate = Date.parse($(this).val());
    var ageDifMs = Date.now() - pickedDate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    $('#live_age').text("You are " + calculatedAge + " Years old")
  });

  $('#state').change(function(){
    $('#state_info').text('You are from '+ $(this).val())
  });

  $('#user_form').submit(function(e){
    e.preventDefault();

  });

  $('#user_list_button').click(function(){
  // Get value of text input
  var userInput = $('#user_input').val().trim();
  if (userInput.length){
  // append new list item with text input value

    $('#users_list').append('<li>' + userInput + '</li>');
    $('#user_input').val('');
  } else {
    alert('blank input not allowed');
  }
  });
  $('#clear_list_button').click(function(){
    $('#users_list').empty();
  });
});
