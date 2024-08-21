const key = '33b94ad76317a9b08d2089ff92652824'

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestHorror: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
    requestUpcoming: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US`
}

export default request
