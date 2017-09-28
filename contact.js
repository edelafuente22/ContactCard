$(document).ready(function () {
    
    $(form).submit(function () {
        $('input[id="first_name"]').val();
        var first_name = $('input[id="first_name"]').val();
        $('input[id="last_name"]').val();
        var last_name = $('input[id="last_name"]').val();
        $('#description').val();
        var description = $('#description').val();

        var cardFront = "<div class='card'><h1>" + first_name + " " + last_name + "</h1><br><h2>" + "Click for description" + "</h2><h2 id='back'>" + description + "</h2></div>";

        var cardBack = "<div class='card'<h2>" + description + "</h2></div>";

        $("#cards").append(cardFront);
        $("#first_name").val("");
        $("#last_name").val("");
        $("#description").val("");

        return false;
                
    })

    $(document).on('click', '.card', function () {
        $(this).children().toggle();
    })

})



    // $(document).on('click', '.card' function() {
    //     $(this).show(cardBack);
    // })