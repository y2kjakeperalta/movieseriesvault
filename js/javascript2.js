fetch('https://api.sampleapis.com/cartoons/cartoons2D').then((data) => {

	return data.json();
}).then((completedata) => {
	let data1 = "";
	console.log(completedata);
	completedata.map((values) => {

		data1 += `
		
		<div class="card" style="width: 20rem;">
		<img src=${values.image} class="card-img-top" alt="image-unavailable">
		<div class="card-body-cartoon">
		  <h5 class="card-title-cartoon">${values.title}</h5>
		  <p class="card-text-creator"><b>Creators:</b> ${values.creator}</p>
		
		</div>
		<ul class="list-group list-group-flush">
		<li class="list-group-item"><b>Genres : </b>${values.genre}</li>
		  <li class="list-group-item"><b>Rating : </b>${values.rating}</li>
		  <li class="list-group-item"><b>Number of Episodes:</b> ${values.episodes}</li>
		  <li class="list-group-item"><b>Runtime:</b> ${values.runtime_in_minutes} minutes</li>
		  <li class="list-group-item"><b>Year:</b> ${values.year}</li>
		</ul>
	  </div>
	
		`

	});
	document.getElementById("container").innerHTML = data1;


}).catch((err) => {
	console.log(err);
})
