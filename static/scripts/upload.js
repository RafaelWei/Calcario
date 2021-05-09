function addFields(num, names){
	// Number of inputs to create
	var number = document.getElementById(num).value;
	// Container <div> where dynamic content will be placed
	var container = document.getElementById(names);
	// Clear previous contents of the container
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i=0; i<number; i++){
		// Append a node with a random text
		container.appendChild(document.createTextNode(num + " " + (i+1) + ":"));
		// Create an <input> element, set its type and name attributes
		var input = document.createElement("input");
		input.type = "text";
		input.name = num + i;
		input.required = true;
		container.appendChild(input);
		// Append a line break 
		container.appendChild(document.createElement("br"));
	}
}
