$(function() {

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

    await $("#burger_form").val("");

    getBurgers();
}
)


function getBurgers() {$.get("/api/burger", function(burger){
    //clear the current list 
    $("#to_munch_list").empty();
    console.log(burger)
    //loop through responses and append a li for each burger
    for(let i=0; i<burger.length; i++){
        // let burger_item = $("<li>");
        // let burger_name = $("<p>");
        // burger_name.text(burger[i].name);
        // let new_button = $(`<button class="devoured">Devour!</button>`);
        // new_button.attr(id, burger[i].id);
        // burger_item.append(burger_name);
        // burger_item.append(new_button);
        // $("#to_munch_list").append(burger_item);

        let new_div = $("<div>");
        new_div.addClass("well");
        new_div.attr("id", "burger-well-" + burger[i].id);
        let munch_button = document.createElement("button")
        munch_button.textContent = "Munch";
        munch_button.setAttribute("class","munch_button")
        munch_button.setAttribute("id", burger[i].id);

        $("#to_munch_list").append(new_div);
        $("#burger-well-" + i).append("<p>" + burger[i].name + "<p>");
        $("#burger-well-" + i).append(munch_button)

    }
    devourBurger();
})
}



async function devourBurger() {
$(".munch_button").on("click", function(event){
    event.preventDefault();
    console.log("HELLOOOOOOO")
    console.log(this.id);
    let id = this.id
    let newMunchedState = { 
        isMunched: true,
        id: id
    };


    $.ajax("api/burger" + id, {
        type: "PUT",
        data: newMunchedState
    }).then(function(){
        console.log("Munched burger, and it was delish.");
        getBurgers();
    })
})
}


getBurgers();

});