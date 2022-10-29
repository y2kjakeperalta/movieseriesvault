fetch('https://api.sampleapis.com/movies/mystery').then((data) => {

    return data.json();
}).then((completedata) => {
    let data1 = "";
    console.log(completedata);
    completedata.map((values) => {

        data1 += `
        
        <div class="card">
        <img src=${values.posterURL} class="card-img" alt="image-unavailable">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <a href="https://www.imdb.com/title/${values.imdbId}/?ref_=nv_sr_srsg_0"><button type="button" class="btn btn-danger dark btn-download" >Search Movie Details</button></a>
        </div>
      </div>`
    });
    document.getElementById("genre-title").innerHTML=data1;


}).catch((err) => {
    console.log(err);
})


//<a href="https://www.google.com/search?client=opera-gx&q=${values.imdbId}&sourceid=opera&ie=UTF-8&oe=UTF-8"><button type="button" class="btn btn-danger dark btn-download" >Search Movie</button></a>