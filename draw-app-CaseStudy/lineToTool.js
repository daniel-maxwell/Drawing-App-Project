

function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// Initialise the starting x and y positions to default values
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false; // Variable to control when & where the line will start and stop. False until user begins drawing

	this.draw = function(){

		if(mouseIsPressed){ // if the mouse is pressed down, save the current mouse x and y position to variables
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels(); //Loads the pixel data for the display window into the pixels[] array.
			}

			else{
				updatePixels(); //Updates the backing canvas for this image with the contents of the [pixels] array.
				line(startMouseX, startMouseY, mouseX, mouseY); // draw the line according to the start and current mouse co-ords
			}

		}

		// reset the tool back to its start state after a line has been drawn.
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1; 
		}
	};
}
