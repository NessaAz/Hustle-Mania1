$(document).ready(function(){
    $(".book-button").on('click', function(){
        // redirect to booking section
    })

     //sense input location and produce buttons with repective locations

    $.ajax({
        url: 'js/locations.json',
        success:function(result){
            for(let location of result){
               console.log(location.mombasa)             
              
            }
        },
    })

    $.ajax({
        url: 'js/laptops.json',
        success:function(result){
            for(let laptop of result){
               console.log(laptop.dell)             
              
            }
        },
    })






   

    







    
    
  
   
    
})
