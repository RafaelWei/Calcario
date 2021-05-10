function submitWork() {
	const title = document.getElementById("title").value;
	const authors = document.getElementById("authors");
	const advisers = document.getElementById("supervisors");
	const institution = document.getElementById("inst").value;
	const type = document.getElementById("type").value;
	const date_of_publication = document.getElementById("date").value;
	const field = document.getElementById("area").value;
	const keywords = document.getElementById("keywords").value;
	const summary = document.getElementById("summary").value;

	const file = document.getElementById("fileupload").value;

	const formData = new FormData();

	formData.append("title", title);
	formData.append("authors", authors.map(x => x.value).join(","));
	formData.append("advisers", supervisors.map(x => x.value).join(",")));
	formData.append("institution", institution);
	formData.append("type", type);
	formData.append("date_of_publication", date_of_publication);
	formData.append("field", field);
	formData.append("keywords", keywords);
	formData.append("abstract", summary);
	formData.append("file", file);

	fetch("/upload", {
		method: "POST",
		credentials: "same-origin",
		redirect: "follow",
		body: formData
	}).then(response => {
		if (response.ok) {
			alert("Trabalho enviado com sucesso.");
		} else {
			alert("Erro interno. Por favor, tente novamente mais tarde.");
		}
	});

	return true;
}

function addFields(num, names) {
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
