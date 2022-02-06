
{/* // SYNTAX
// $('selector').action()
// There are mainly 3 type of selector in jquery

// 1. Select by element. tag
// 2. select by ID
// 3. select by class */}

$(document).ready(function () {
  // Writing all the code withing this function will not load your jQuery before it loads your page.

//or else you can write
// $(funtion(){

// })
// Instead of the upper ready fucntions

  // console.log($);
  // $('p').click();
  $("p").click(function () {

    console.log("You clicked on five");
    // $(this).hide();
    // $('p').hide(); It will hide all the ps
    // Similarly we can select elements by their ids and theur respective classees as well

  }); // Do this after click
//   $("p").dblclick(function () {

//     console.log("You doubleclicked on five");
//   }); 
//   $("p").mouseenter(function () {

//     console.log("You entered this", this);
//   }); 
//   $("p").mouseleave(function () {

//     console.log("You left this", this);
//   }); 

     // 2. This is an example of Id selector 
    //   $('#five').click();

//ON METHOD
$('p').on(
    {'click':function(){
    console.log("Thanks for clicking", this);
}, 
mouseleave:function()
{
    console.log("Mouse left",this);
}
})

//Hide and show!

// $('#lorem').hide(1000, function(){
//     console.log("hidden")
// })
// $('#lorem').show(1000, function(){
//     console.log("hidden")
// })

//Button 
//   $('#but').click(function(){
//       $('#lorem').toggle(1000)
//   })
//   $('#but1').click(function(){
//       $('#lorem').fadeOut(1000)
//   })
//   $('#but2').click(function(){
//       $('#lorem').fadeIn(1000)
//   })
//   $('#but3').click(function(){
//       $('#lorem').fadeToggle(1000)
//   })
//   $('#but4').click(function(){
//       $('#lorem').fadeTo(1000)
//   })

//   //SLIDE METHOD 
//   $('#lorem').slideUp(1000, function()
//   {
//       console.log('done');
//   })
//   $('#lorem').slideDown(1000);
//   $('#lorem').slideToggle(1000);



  //Animate Function in Jquery
  $('#lorem').animate({
      opacity:0.3,
      height : '150px',
      width :'350px'
  },1000)
  $('#lorem').animate({
      opacity:0.9,
      height : '550px',
      width :'1050px'
  },1000)
});
