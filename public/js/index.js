

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

//this function sends a get request for all burgers and sorts them according to isMunched T or F
 function getBurgers() {
    $.get("/api/burger",  function(burger){
    //clear the current list 
    $("#to_munch_list").empty();
    $("#munched_list").empty();
    console.log(burger);
    //loop through responses and append a div for each burger
     for(let i=0; i<burger.length; i++){
        //if burger is not munched, create and append to left column
        if(!burger[i].isMunched) {
        let new_div = $("<div>");
 
        new_div.attr("id", "burger-well-" + burger[i].id);
        let munch_button = document.createElement("button")
        munch_button.textContent = "Munch";
        munch_button.setAttribute("class","munch_button")
        munch_button.setAttribute("id", burger[i].id);

        $("#to_munch_list").append(new_div);
        $("#burger-well-" + burger[i].id).append("<p>" + burger[i].name + "<p>");
        $("#burger-well-" + burger[i].id).append(munch_button)
        }
        //if burger is munched, create and append to right column
         else {
            let new_div = $("<div>");
     
        new_div.attr("id", "eaten-well-" + burger[i].id);
        let poop_button = document.createElement("button")
        poop_button.textContent = "Poop the burger";
        poop_button.setAttribute("class","poop_button")
        poop_button.setAttribute("id", burger[i].id);

        $("#munched_list").append(new_div);
        $("#eaten-well-" + burger[i].id).append("<p>" + burger[i].name + "<p>");
        $("#eaten-well-" + burger[i].id).append(poop_button)
        }
    }
    //call click-listener functions for new buttons
    devourBurger();
    deleteBurger();
})
}

//on click, will send ajax put to change isMunched to true, and re-render buger list
async function devourBurger() {
await $(".munch_button").on("click", function(event){
    event.preventDefault();
    console.log("HELLOOOOOOO")
    console.log(this.id);
    let id = this.id
    let newMunchedState = { 
        isMunched: true,
        id: id
    };
    $.ajax("api/burger/" + id, {
        type: "PUT",
        data: newMunchedState
    }).then(function(err, res){
        if(err) console.log("Error");
        console.log("Munched burger, and it was delish.");
        getBurgers();
        
    })
});
}

//on click, will send ajax delete request
 async function deleteBurger() {
    await  $(".poop_button").on("click", async function(event) {
        event.preventDefault();
        console.log("GOODBYYYEEE burger number: " + this.id);

        let id = this.id;

        $.ajax("api/burger/" + id, {
            type: "DELETE"
        }).then(function(err, res) {
            //this part is not getting hit for some reason
            if(err) console.log("Error");
            console.log("Deleted Burger.");
            getBurgers();
            
        })
    });

}


getBurgers();
