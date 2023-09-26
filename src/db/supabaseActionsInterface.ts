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

export interface IGenres{ 
    genres: { 
        name: any; 
    };
}

export interface ISelectUserByIdReturn {
    id: string, 
    username: string,
    genres: IGenres[],
}

