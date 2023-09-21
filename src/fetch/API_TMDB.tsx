// API Key => 4c0be9640a445d8c45b253da0e1085dc
// API Read Access Token => eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzBiZTk2NDBhNDQ1ZDhjNDViMjUzZGEwZTEwODVkYyIsInN1YiI6IjY0ZmYwZDQzZmZjOWRlMGVlMTc2NDJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHIJ8OGscYlTUh4I3EF8j2ADR2lLr3TUcdD7ffqt67E

const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzBiZTk2NDBhNDQ1ZDhjNDViMjUzZGEwZTEwODVkYyIsInN1YiI6IjY0ZmYwZDQzZmZjOWRlMGVlMTc2NDJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHIJ8OGscYlTUh4I3EF8j2ADR2lLr3TUcdD7ffqt67E'

const ApiUrl = "https://api.themoviedb.org/3";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: authorization,
    }
};

export async function getMoviesByName(movieName: string): Promise<IGetMoviesByNameReturn[]> {
    const request = await fetch(`${ApiUrl}/search/movie?query=${movieName}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));

    return request.results;
}

export async function getMovieDetails(movieID: string): Promise<IGetMovieDetailsReturn>{
    const request = await fetch(`${ApiUrl}/movie/${movieID}`, options)
        .then(res => res.json())
        .catch(err => console.log(err))

    return request;
}