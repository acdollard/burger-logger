
//post function for submitting a buger from the front-end
$("#add-button").on("click", function(event){
    event.preventDefault();
    console.log("Hi!")

    let new_burger = {
        name: $("#burger_form").val().trim()
    }

    $.post("/api/burger", new_burger)
    .then(function(data){
        console.log(data)
    });

    $("#burger_form").val("");
}
)