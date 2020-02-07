

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
    location.reload();
}
)

//on click, will change isMunched to true and reload the page
 $(".munch_button").on("click", function(event){
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
        // getBurgers();
        location.reload();
        
    })
});


//on click, will send ajax delete request
      $(".poop_button").on("click", async function(event) {
        event.preventDefault();
        console.log("GOODBYYYEEE burger number: " + this.id);

        let id = this.id;

        $.ajax("api/burger/" + id, {
            type: "DELETE"
        }).then(function(err, res) {
            //this part is not getting hit for some reason
            if(err) console.log("Error");
            console.log("Deleted Burger.");
            // getBurgers();
            location.reload();
            
        })
    });

