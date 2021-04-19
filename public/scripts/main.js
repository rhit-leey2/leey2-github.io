	var controller = new ScrollMagic.Controller();

    var revealElements = document.getElementsByClassName("portItems");
        for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                    offset: 50, // start a little later
                    duration: "80%",
                    triggerHook: 0.9,
                })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                .addIndicators({
                    name: "portItems " + (i + 1)
                }) // add indicators (requires plugin)
                .addTo(controller);
        }