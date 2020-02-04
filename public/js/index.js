

//post function for submitting a buger from the front-end
$("#add-button").on("click", async function(event){
    event.preventDefault();
    console.log("Hi!")

    let new_burger = {
        name: $("#burger_form").val().trim()
    }

    await $.post("/api/burger", new_burger)
    .then(function(data){
        console.log(data)
    });

    $("#burger_form").val("");

    getBurgers();
}
)


function getBurgers() {$.get("/api/burger", function(burger){
    //clear the current list 
    $("#to_munch_list").empty();

    //loop through responses and append a li for each burger
    for(let i=0; i<burger.length; i++){
        let burger_item = $("<li>");
        burger_item.text(burger[i].name)
        $("#to_munch_list").append(burger_item);
    }
})
}