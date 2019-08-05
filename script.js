// When the user scrolls down 50px from the top of the document, show the button
$(window).scroll(function() {
    if ($(this).scrollTop() >= 46) {      // If page is scrolled more than 46px
        $('#return_top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return_top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return_top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                    // Scroll to top of body
    }, 500);
});

//Smooth scrolling to the clicked navigation name
$(".navbar-nav a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
 
    // store the hash
    var hash = this.hash;
 
    // animate smooth to top
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000, function(){

        // default click behaviour
        window.location.hash = hash;
      });
 });

// When you click on an icon under the tablet, the active icon changes its style
 $('.tablet_icons').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});
$(document).ready(function(){
    $("#files_tablet, #people_tablet, #history_tablet, #messages_tablet, #conversations_tablet, #courses_tablet, #booking_tablet").hide();
});
//When clicking on one of icons under tablet, show the platfrom image that correponds to icons
$("#home_icon").on('click', function() {
    $("#files_tablet, #people_tablet, #history_tablet, #messages_tablet, #conversations_tablet, #courses_tablet, #booking_tablet").hide();
    $("#home_tablet").fadeIn(1500);  
 });
 $("#files_icon").on('click', function() {
    $("#home_tablet, #people_tablet, #history_tablet, #messages_tablet, #conversations_tablet, #courses_tablet, #booking_tablet").hide();
    $("#files_tablet").fadeIn(1500);  
 });
 $("#people_icon").on('click', function() {
    $("#home_tablet, #files_tablet, #history_tablet, #messages_tablet, #conversations_tablet, #courses_tablet, #booking_tablet").hide();
    $("#people_tablet").fadeIn(1500);  
 });
 $("#history_icon").on('click', function() {
    $("#home_tablet, #people_tablet, #files_tablet, #messages_tablet, #conversations_tablet, #courses_tablet, #booking_tablet").hide();
    $("#history_tablet").fadeIn(1500);  
 });
 $("#messages_icon").on('click', function() {
    $("#home_tablet, #people_tablet, #history_tablet, #files_tablet, #conversations_tablet, #courses_tablet, #booking_tablet").hide();
    $("#messages_tablet").fadeIn(1500);  
 });
 $("#conversations_icon").on('click', function() {
    $("#home_tablet, #people_tablet, #history_tablet, #messages_tablet, #files_tablet, #courses_tablet, #booking_tablet").hide();
    $("#conversations_tablet").fadeIn(1500);  
 });
 $("#courses_icon").on('click', function() {
    $("#home_tablet, #people_tablet, #history_tablet, #messages_tablet, #conversations_tablet, #files_tablet, #booking_tablet").hide();
    $("#courses_tablet").fadeIn(1500);  
 });
 $("#booking_icon").on('click', function() {
    $("#home_tablet, #people_tablet, #history_tablet, #messages_tablet, #conversations_tablet, #courses_tablet, #files_tablet").hide();
    $("#booking_tablet").fadeIn(1500);  
 });


 


 
