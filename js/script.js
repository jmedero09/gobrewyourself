$(document).ready(function(){
    var strength=null;
    var amountWater;
    var amountCoffee;
    
    var coffeeRatio = {
      standard:18,
      strong:16,
      myPref:14
    };
    //Check for strength of coffee
    $("#strength div").on("click",function(){
         console.log(this);//Will give me the whole element
         $('#beanField').prop("disabled", false);
         strength = this.id;
         //Remove text-shadow from all strengths
         $(this).parent().find('#standard').css('text-shadow', 'none');
         $(this).parent().find('#strong').css('text-shadow', 'none');
         $(this).parent().find('#mypref').css('text-shadow', 'none');
         $(this).css('text-shadow','0px 0px 2px rgba(255, 255, 255, 1)'); //shows the selected strength
         console.log(strength);
    });
    
    //$("#beanField").on("input",function(){
         //console.log($(this).val());
         //amountCoffee=$(this).val();
         
    $("#calc").on("click",function(){
         //console.log($(this).val());
         amountCoffee=$("#beanField").val();
         
         if(strength === "standard"){
              amountWater= amountCoffee*coffeeRatio.standard;
              console.log(amountWater);
              $("#waterField").val(amountWater);
         }
         else if(strength === "strong"){
               amountWater= amountCoffee*coffeeRatio.strong;
               console.log(amountWater);
               $("#waterField").val(amountWater);

         }
         else if(strength === "mypref"){
               amountWater= amountCoffee*coffeeRatio.myPref;
               console.log(amountWater);
               $("#waterField").val(amountWater);
         }
         
    });
    //Replace images with autoplay videos
    $('#filter').on('click', function() {
        $(this).html('<iframe width="420" height="315" src="https://www.youtube.com/embed/k1trBzX-1JE?start=33&end=43&rel=0&showinfo=0&autohide=0&modestbranding=0&controls=0&autoplay=1" frameborder="0" allowfullscreen="false"></iframe>').css('background', 'none');
    });
    $('#cpour').on('click', function() {
        $(this).html('<iframe width="420" height="315" src="https://www.youtube.com/embed/k1trBzX-1JE?start=33&end=43&rel=0&showinfo=0&autohide=0&modestbranding=0&controls=0&autoplay=1" frameborder="0" allowfullscreen="false"></iframe>').css('background', 'none');
    });
    $('#bloom').on('click', function() {
        $(this).html('<iframe id="yerr" width="420" height="315" src="https://www.youtube.com/embed/k1trBzX-1JE?start=53&end=84&rel=0&showinfo=0&autohide=0&modestbranding=0&controls=0&autoplay=1" frameborder="0" allowfullscreen="false"></iframe>').css('background', 'none');
    });
    // $('#bloom').mouseleave(function () {
    //   $("#yerr").hide();
    //   $("#yerr").stopVideo();
    // });
    
});