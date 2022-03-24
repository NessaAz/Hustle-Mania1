$(document).ready(function () {
    $(".book-button").on('click', function () {
        // redirect to booking section
    })

    //sense input location and produce buttons with repective locations
    $("#inputCity").change(function () {
        $(".location-form").submit()
        let selected = $(".location:selected").text()
        if (selected == "Mombasa") {
            resetLocations()
            mombasa.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            });
        } else if (selected == "Nairobi") {
            resetLocations()
            nairobi.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selected == "Kiambu") {
            resetLocations()
            kiambu.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selected == "Kericho") {
            resetLocations()
            kericho.forEach(element => {
                $(".buttonsLocate").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selected == "Kisumu") {
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


    function resetLocations() {
        $(".buttonsLocate").empty()
    }
    function resetLaptops() {
        $(".buttonsLaptop").empty()
    }


    $("#inputLaptop").change(function () {
        $(".laptop-form").submit()
        let selected = $(".laptop:selected").text()
        if (selected == "Dell") {
            resetLaptops()
            dell.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            });
        } else if (selected == "Apple") {
            resetLaptops()
            apple.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )

            })
        } else if (selected == "Hp") {
            resetLaptops()
            hp.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
        } else if (selected == "Asus") {
            resetLaptops()
            asus.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
        } else if (selected == "Lenovo") {
            resetLaptops()
            lenovo.forEach(element => {
                $(".buttonsLaptop").append(
                    `<button type="button" class="m-2 location-button btn btn-secondary rounded-pill">
                    ${element}</button>`
                )
            })
        } else{
            resetLaptops()
        }

    })



})
























