function searchWork() {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author");
	const adviser = document.getElementById("supervisor");
	const institution = document.getElementById("inst").value;
	const type = document.getElementById("type").value;
	const year_of_publication = document.getElementById("date").value;
	const field = document.getElementById("area").value;
	const keywords = document.getElementById("keywords").value;

	const file = document.getElementById("fileupload").value;

	const formData = new FormData();

	formData.append("title", title);
	formData.append("author", author.map(x => x.value).join(","));
	formData.append("adviser", adviser.map(x => x.value).join(","));
	formData.append("institution", institution);
	formData.append("type", type);
	formData.append("year_of_publication", year_of_publication);
	formData.append("field", field);
	formData.append("keywords", keywords);
	formData.append("file", file);

	fetch("/search", {
		method: "POST",
		credentials: "same-origin",
		redirect: "follow",
		body: formData
	}).then(response => {
		if (response.ok) {
			alert("Pesquisa realizada com sucesso.");
		} else {
			alert("Erro interno. Por favor, tente novamente mais tarde.");
		}
	});

	return true;
}