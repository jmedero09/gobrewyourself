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

});