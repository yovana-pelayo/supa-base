const SUPABASE_URL = 'https://peasswzzkjbruchjrbij.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYXNzd3p6a2picnVjaGpyYmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE1ODIsImV4cCI6MTk1OTkxNzU4Mn0.zJetl90uaDL4EaIRJNRcRcitMYa5y0H-IsjE6dLCQ3s';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
    console.log(resp);

    return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
    const movies = await client.from('movies').select('*, directors(*)');
    console.log(movies);
    return checkError(movies);

}

export async function getDirectorNames() {
  // return the list of the director's names
  const directors = await client.from('directors').select('name');
  console.log(directors);
  return checkError(directors);

}

export async function getMovieById(id) {
  // return the movie with the given id
  const movieId = await client.from('movies').select('*').eq('id', id).single();
  console.log(movieId);
  return checkError(movieId);

}

export async function getMovieByTitle(title) {
  // return the movie with the given title
  const titleM = await client.from('movies').select('*').eq('title', title).single();
  return checkError(titleM);

}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
  const Old = await client.from('movies').select('year').sort();

  return checkError(Old);

}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
