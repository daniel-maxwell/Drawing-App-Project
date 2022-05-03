function HelperFunctions() {
	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		background(255);

		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvas to the local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas();
	});
}