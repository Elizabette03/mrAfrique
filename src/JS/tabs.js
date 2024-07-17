// Tabs

const actors = document.querySelectorAll(".actor");
const movies = document.querySelectorAll(".actor-movies");


actors.forEach((actor, index) => {
  actor.addEventListener("click", () => {
    actors.forEach(actor => {actor.classList.remove("movies")});
    actor.classList.add("movies");

     movies.forEach(movie => {
      movie.classList.remove('flex');
      movie.classList.add('hidden');

   })
    movies[index].classList.remove('hidden');
     movies[index].classList.add('flex');
  })
})