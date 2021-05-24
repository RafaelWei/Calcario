function submitWork() {
	const file = document.getElementById("fileupload").files[0];
	const date_of_publication = document.getElementById("date").value;
	const field = document.getElementById("area").value;

	console.log(file);
	console.log(date_of_publication);
	console.log(field);

	const formData = new FormData();

	formData.append("file", file);
	formData.append("date_of_publication", date_of_publication);
	formData.append("field", field);

	console.log(formData["file"]);

	fetch("/upload", {
		method: "POST",
		credentials: "same-origin",
		redirect: "follow",
		body: formData
	}).then(response => {
		if (response.ok) {
			alert("Trabalho enviado com sucesso.");

			window.location = response.url;
		} else {
			alert("Erro interno. Por favor, tente novamente mais tarde.");
		}
	});

	return true;
}

function updateNumFields(nInput, destDiv, labelContent, className) {
	const div = document.getElementById(destDiv);

	const newN = document.getElementById(nInput).value;
	const oldN = document.getElementById(destDiv).children.length / 2;

	if (newN < 0) {
		return;
	}

	if (newN > oldN) {
		for (let i = oldN + 1; i <= newN; ++i) {
			let label = document.createElement("label")
			label["htmlFor"] = className;
			label["textContent"] = labelContent + " " + i + ":";
			div.appendChild(label);

			let input = document.createElement("input");
			input["name"] = className;
			input["className"] = className;
			input["required"] = true;
			div.appendChild(input);
		}
	} else if (newN < oldN) {
		div.removeChild(div.lastChild);
		div.removeChild(div.lastChild);
	}
}
