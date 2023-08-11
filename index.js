// index.js

async function fetchMovieByID(movieID) {
  try {
    const response = await fetch(`http://localhost:3000/movies/${movieID}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movieData = await response.json();
    return movieData;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return null;
  }
}
const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);






// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.querySelector('form');
//   form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const searchInput = document.getElementById('searchByID');
//     const movieID = searchInput.value;

//     const movieData = await fetchMovieByID(movieID);
//     if (movieData) {
//       displayMovieDetails(movieData.title, movieData.summary);
//     }
//   });
// });

// ... (rest of the code)
