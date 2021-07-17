export const getTrendingData = (page) => {
  const endpoint = 'https://api.themoviedb.org/3/trending/all/day?api_key=3e07e5069db3b69f4419b6b18c8dda8c&language=pt-BR'
  return fetch(`${endpoint}&page=${page}`)
    .then((response) => response.json())
    .then((data) => data.results);
}