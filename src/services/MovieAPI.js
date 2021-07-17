export const getMovieById = (id) => {
  const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=3e07e5069db3b69f4419b6b18c8dda8c&language=pt-BR`;
  return fetch(endpoint)
    .then((response) => response.json())
}