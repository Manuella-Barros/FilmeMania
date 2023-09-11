// API Key => 4c0be9640a445d8c45b253da0e1085dc
// API Read Access Token => eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzBiZTk2NDBhNDQ1ZDhjNDViMjUzZGEwZTEwODVkYyIsInN1YiI6IjY0ZmYwZDQzZmZjOWRlMGVlMTc2NDJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHIJ8OGscYlTUh4I3EF8j2ADR2lLr3TUcdD7ffqt67E

export function getMoviesByName() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzBiZTk2NDBhNDQ1ZDhjNDViMjUzZGEwZTEwODVkYyIsInN1YiI6IjY0ZmYwZDQzZmZjOWRlMGVlMTc2NDJlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHIJ8OGscYlTUh4I3EF8j2ADR2lLr3TUcdD7ffqt67E'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=barbie`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

