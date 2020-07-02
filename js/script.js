$(document).ready(function() {
   $('#rec').on('click', function() {
     $( ".research-content" ).toggle( "blind", 1000 );
   }); //#rec on click

   $('#about-anchor').on('click', function() {
     $('#about-content').toggle("blind", 1000);
   })

   $('#first-i1').on('click', function() {
     $('#prim-img').attr('src', 'assets/img/storyboard_001.png');
   });

   $('#first-i2').on('click', function() {
     $('#prim-img').attr('src', 'assets/img/storyboard_002.png');
   });

   $('#first-i3').on('click', function() {
     $('#prim-img').attr('src', 'assets/img/storyboard_004.png');
   });

   $('#first-i4').on('click', function() {
     $('#prim-img').attr('src', 'assets/img/storyboard_003.png');
   });

   $('#sec-i1').on('click', function() {
     $('#sec-img').attr('src', 'assets/img/storyboard_005.png');
   });

   $('#sec-i2').on('click', function() {
     $('#sec-img').attr('src', 'assets/img/storyboard_006.png');
   });

   $('#sec-i3').on('click', function() {
     $('#sec-img').attr('src', 'assets/img/storyboard_007.png');
   });

   $('#sec-i4').on('click', function() {
     $('#sec-img').attr('src', 'assets/img/storyboard_008.png');
   });
 }); //ready done
