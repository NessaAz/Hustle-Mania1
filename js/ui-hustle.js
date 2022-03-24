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
            });
        } else if (selectedLocation == "Nairobi") {
            resetLocations()
            nairobi.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selectedLocation == "Kiambu") {
            resetLocations()
            kiambu.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selectedLocation == "Kericho") {
            resetLocations()
            kericho.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selectedLocation == "Kisumu") {
            resetLocations()
            kisumu.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
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
            });
        } else if (selectedLaptop == "Apple") {
            resetLaptops()
            apple.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if ( selectedLaptop == "Hp") {
            resetLaptops()
            hp.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
        } else if ( selectedLaptop == "Asus") {
            resetLaptops()
            asus.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
        } else if (selectedLaptop == "Lenovo") {
            resetLaptops()
            lenovo.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 laptop-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
        } else{
            resetLaptops()
        }

    })
    // CLEAR PRIOR SELECTS
    function resetLaptops() {
        $(".buttonsLaptop").empty()
    }
    



})
























