export const genericMovieAPI = (path, id, extra, page) => {
  const endpoint = `https://api.themoviedb.org/3${path}/${id}${extra}?api_key=3e07e5069db3b69f4419b6b18c8dda8c&language=pt-BR`;
  console.log(endpoint)
  return fetch(page ? `${endpoint}&page=${page}` : endpoint)
    .then((response) => response.json());
}