$("#show-btn").click(function(){
    $("#hidden-work").toggleClass("hide");
    $("#hidden-work").toggleClass("open");
    if ( $('#hidden-work').is( ".open" ) ) {
        $("#show-btn").text("Show Less.");
      }else {
        $("#show-btn").text("Show More.");
      }
});
$("#show-btn-blog").click(function(){
  $(".our-news2").toggleClass("hide");
  $(".our-news2").toggleClass("open");
  if($(".our-news2").is(".open")) {
    $("#show-btn-blog").text("Show less.");
  }
  else if($(".our-news2").is(".hide")) {
    $("#show-btn-blog").text("Show More.");
  }
})

function slickify(){
  $('.b-news').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        }
      ] 
  }); $(".slick-next").text("");
  $(".slick-prev").text("");};
  slickify();
  $("#prev").click(function(){
    $(".slick-prev").click();
  })
  $("#next").click(function(){
    $(".slick-next").click();
  })
$(window).resize(function(){
 if ($(window).width()> 991){
    slickify();
  }
})
$(window).resize(function(){
if($(window).width()< 750.5){
  $ (".our-news2").addClass("hide");}
  else{ $ (".our-news2").removeClass("hide");}
});
for(let i = 0; i <document.querySelectorAll(".work img").length; i++){
const myimage = document.querySelectorAll(".work img")[i];
function load(){
  myimage.setAttribute("loading" ,"lazy");};
load();
}

// $(window).resize(function(){
//   var $windowWidth = $(window).width();
//   if ($windowWidth > 991) {
//       slickify(); 
//       $('#blog-btn').addClass('hide-me');  
//   }else if($windowWidth < 991) {
//     $('#blog-btn').removeClass('hide-me');
//   }
// });
// $("#next").click(function(){
  
// })

