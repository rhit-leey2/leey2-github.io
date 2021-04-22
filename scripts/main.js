	var controller = new ScrollMagic.Controller();
/*
    if ($(window).width() > 768) {
        var element = document.getElementById("pinn");
        element.id = "pin2";
    }else{
        var element = document.getElementById("pin2");
        element.id = "pinn";
    } 

    var pinItems = document.getElementsByClassName("pinItems");
    for (var i = 0; i < pinItems.length; i++) {
        new ScrollMagic.Scene({
        triggerElement: "#trigger2"
      })
      .setPin("#pin2")
      .addIndicators({name: "1 (duration: 0)"}) 
      .addTo(controller);
    } */

    var revealItems = document.getElementsByClassName("aboutItems");
	for (var i = 0; i < revealItems.length; i++) { // create a scene for each element
	    new ScrollMagic.Scene({
	            triggerElement: revealItems[i], // y value not modified, so we can use element as trigger as well
	            offset: 40, // start a little later
	            duration: "80%",
	            triggerHook: 0.9,
	        })
	        .setClassToggle(revealItems[i], "visible") // add class toggle
	        /*
            .addIndicators({
	            name: "aboutItems " + (i + 1)
	        }) // add indicators (requires plugin)
            */
	        .addTo(controller);
	}

	var revealItems = document.getElementsByClassName("portItems");
	for (var i = 0; i < revealItems.length; i++) { // create a scene for each element
	    new ScrollMagic.Scene({
	            triggerElement: revealItems[i], // y value not modified, so we can use element as trigger as well
	            offset: 60, // start a little later
	            duration: "75%",
	            triggerHook: 0.9,
	        })
	        .setClassToggle(revealItems[i], "visible") // add class toggle
	        /*
            .addIndicators({
	            name: "portItems " + (i + 1)
	        }) // add indicators (requires plugin)
            */
	        .addTo(controller);
	}


	var revealItems = document.getElementsByClassName("resItems");
	for (var i = 0; i < revealItems.length; i++) { // create a scene for each element
	    new ScrollMagic.Scene({
	            triggerElement: revealItems[i], // y value not modified, so we can use element as trigger as well
	            offset: 60, // start a little later
	            duration: "70%",
	            triggerHook: 0.9,
	        })
	        .setClassToggle(revealItems[i], "visible") // add class toggle
	        /*
	        .addIndicators({
	            name: "resItems " + (i + 1)
	        }) // add indicators (requires plugin)
            */
	        .addTo(controller);
	}

