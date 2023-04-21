const form = document.getElementById("form_search");
const inputsearch = document.getElementById("input_search");
const result = document.getElementById("result");


let search = "";
let movies = [];


const fetchMovies = async () => {
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9f7fecea94d760bb108ce0cb401668f3&query=${search}`).then((res) => res.json());
    console.log(movies);
};

const moviesDisplay = async () => {
    await fetchMovies();
    movies.results.length = 12
    result.innerHTML = movies.results.map((movie) => 
        `
            <li>
                <h2>${movie.original_title}</h2>
                <div class="card_content">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
                    <div class="infos">
                        <p>${movie.overview}</p>
                        <p>Popularité : ${movie.popularity} ⭐</p>
                    </div>
                </div>
            </li>
        `
    ).join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    search = inputsearch.value;
    moviesDisplay();
})
