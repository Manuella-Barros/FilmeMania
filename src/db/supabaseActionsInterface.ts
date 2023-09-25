export interface SelectGenresReturn {
    name: string;
}

export interface LoginUserReturn{
    id: string, 
    username: string,
}

export interface IUserFavGenres {
    genres: {
        name: string
    }
}

export interface ISelectUserByIdReturn {
    id: string, 
    username: string,
    genres: {
        genres: {
            name: string
        }
    }[],
}