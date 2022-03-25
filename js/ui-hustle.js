$(document).ready(function () {
    

    // Ease in the lender registration form
    $(".register-button").on("click", function(){
        $(".selection").animate({
            position: "absolute",
            right: "0",
        }, 1000, function(){$(".selection").hide()})
        $(".register-container").animate({
            right: "+= 100",
        }, 1000, function(){
            $(".register-container").show()
        })
    })
    // Ease in the booking registration form
    $(".book-button").on("click", function(){
        $(".selection").animate({
            position: "absolute",
            right: "0",
        }, 1000, function(){$(".selection").hide()})
        $(".booking-container").animate({
            right: "+= 100",
        }, 1000, function(){
            $(".booking-container").show()
        })
    })


    // ease in Laptop selection page 

    //LOCATION BUTTON THAT POPUP ON SELECT
    $("#inputCity").change(function () {
        let selectedLocation = $(".location:selected").text()
        if (selectedLocation == "Mombasa") {
            resetLocations()
            mombasa.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".location-button").on('click', function(){
                $(".booking-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".booking-container").hide()})
                $(".laptop-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".laptop-container").show()
                })  
            })           
        } else if (selectedLocation == "Nairobi") {
            resetLocations()
            nairobi.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".location-button").on('click', function(){
                $(".booking-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".booking-container").hide()})
                $(".laptop-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".laptop-container").show()
                })  
            }) 

        } else if (selectedLocation == "Kiambu") {
            resetLocations()
            kiambu.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".location-button").on('click', function(){
                $(".booking-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".booking-container").hide()})
                $(".laptop-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".laptop-container").show()
                })  
            })  
        } else if (selectedLocation == "Kericho") {
            resetLocations()
            kericho.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".location-button").on('click', function(){
                $(".booking-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".booking-container").hide()})
                $(".laptop-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".laptop-container").show()
                })  
            })
        } else if (selectedLocation == "Kisumu") {
            resetLocations()
            kisumu.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".location-button").on('click', function(){
                $(".booking-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".booking-container").hide()})
                $(".laptop-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".laptop-container").show()
                })  
            })
        } else {
            resetLocations()
        }
    })

    // CLEAR PRIOR SELECTS
    function resetLocations() {
        $(".buttonsLocate").empty()
    }
    // SLIDE IN THE LAPTOP SELECTION FORM 
   
    // LAPTOP BUTTONS THAT POPUP ON SELECT
    $("#inputLaptop").change(function () {
        let selectedLaptop = $(".laptop:selected").text()
        if ( selectedLaptop == "Dell") {
            resetLaptops()
            dell.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".laptop-button").on('click', function(){
                $(".laptop-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".laptop-container").hide()})
                $(".date-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".date-container").show()
                })  
            })   
        } else if (selectedLaptop == "Apple") {
            resetLaptops()
            apple.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
            $(".laptop-button").on('click', function(){
                $(".laptop-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".laptop-container").hide()})
                $(".date-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".date-container").show()
                })  
            })   
        } else if ( selectedLaptop == "Hp") {
            resetLaptops()
            hp.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".laptop-button").on('click', function(){
                $(".laptop-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".laptop-container").hide()})
                $(".date-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".date-container").show()
                })  
            })   
        } else if ( selectedLaptop == "Asus") {
            resetLaptops()
            asus.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".laptop-button").on('click', function(){
                $(".laptop-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".laptop-container").hide()})
                $(".date-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".date-container").show()
                })  
            })   
        } else if (selectedLaptop == "Lenovo") {
            resetLaptops()
            lenovo.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
            $(".laptop-button").on('click', function(){
                $(".laptop-container").animate({
                    position: "absolute",
                    right: "0",
                }, 500, function(){$(".laptop-container").hide()})
                $(".date-container").animate({
                    right: "+= 100",
                }, 500, function(){
                    $(".date-container").show()
                })  
            })   
        } else{
            resetLaptops()
        }

    })
    // CLEAR PRIOR SELECTS
    function resetLaptops() {
        $(".buttonsLaptop").empty()
    }
    
     
    $(".date-submit").on("click", function(){
        calculate ()
        $(".date-container").hide()
        $(".bookingDisplayBtn").click()
    })
    $(".contact-details").on("click", function(){
            $(".booking-confirmation").show().click($(this).hide())
            $("#bookingDisplay").hide()

    })



    $('.close').on("click", function(){
        $(".selection").show()
    })

    $('.register-close').on("click", function(){
        $(".register-container").hide()
    })
    $(".reminder").on("click", function(){
        window.location = "https://calendar.google.com/calendar/embed?src=c_ptl8cb807qr3ule883v8mcb6ak%40group.calendar.google.com&ctz=Africa%2FNairobi"

    })
    $(".product-btn").on("click",  function(){
            $(".booking-container").show()

    })


    // CALCULATE AMOUNT OF TIME
    function calculate (){
        

    }





    

    




})