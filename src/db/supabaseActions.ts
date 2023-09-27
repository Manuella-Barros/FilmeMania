import { PostgrestError } from "@supabase/supabase-js";
import { getMoviesByName } from "../fetch/API_TMDB";
import { LoginData } from "../pages/account/components/Login";
import { IMovie } from "../pages/home/Home";
import { CommentContainerData } from "../pages/home/components/CommentContainer";
import { supabase } from "./supabase.config";
import { IGenres, ISelectUserByIdReturn, LoginUserReturn, SelectGenresReturn } from "./supabaseActionsInterface";

export async function createUser(name: string, password: string){
    await verifyUsername(name)

    const { error, data } = await supabase.from("users").insert({
        username: name,
        password: password,
    }).select("id");

    if(error){
        console.log("erro");
        console.log(error);
        return false;
    }else{
        return data;
    }
}

export async function insertUserFavGenres(id: string, favGenre: string){
    const { data } = await supabase.from("genres").select("id")
        .match({
            name: favGenre,
        })
    
    if(data){
        const { error } = await supabase.from("fav_genres").insert({
            fk_user_id: id,
            fk_genre_id: data[0].id,
        })

        if(error){
            console.log("erro")
            console.log(error)
        }
    }
}

export async function loginUser(userInfo: LoginData): Promise<LoginUserReturn | false> {
    const { data, error } = await supabase.from("users").select("id, username")
        .match({
            username: userInfo.name,
            password: userInfo.password,
        }).single();
                                
    if(error){
        return false;
    }

    return data;
}

export async function selectGenres(): Promise<SelectGenresReturn[] | false>{
    const { error, data } = await supabase.from("genres").select("name");

    if( error ){
        console.log("erro")
        console.log(error)
        return false;
    } else {
        return data;
    }
}

function isGenreArray(obj: unknown ) : obj is IGenres[]{
    if(!Array.isArray(obj)){
        return false
    }

    if('genres' in obj[0] && 'name' in obj[0].genres ){
        return true
    }

    return false
}

export async function selectGenreById(id: string): Promise<IGenres[] | false>{
    const { data, error } : {data: unknown, error: PostgrestError |  null}  = await supabase.from("fav_genres").select("genres(name)").eq("fk_user_id", id);

    if( error ){
        console.log("erro")
        console.log(error)
        return false;

    } else {
        if(isGenreArray(data)){
            return data;
        }
        
        return false
    }
}

export async function verifyUsername(name: string){
    const { error, count } = await supabase.from("users").select("username", {count: "exact"}).eq("username", name)

    if(error){
        console.log(error)
        return false
    }

    if(count){
        throw new Error("Usuário já existe")
    }

    return true;
}

export async function insertPost(postInfo: CommentContainerData, userID: string){
    const movieID = await getMoviesByName(postInfo.movieSelected)
    
    const { error } = await supabase.from("posts").insert({
        fk_user_id: userID,
        comment: postInfo.comment,
        movie_id: movieID[0].id,
        rating: postInfo.stars,
        movie_title: postInfo.movieSelected,
    })

    if(error){
        console.log(error)
    }

}

export async function selectAllPosts(): Promise<IMovie[] | false>{
    const { error, data } = await supabase.from("posts").select() .order('created_at', { ascending: false })

    if(error){
        console.log(error);
        return false;
    } 

    return data;
}

export async function selectUserById(id: string): Promise<ISelectUserByIdReturn | false | undefined>{
    const { data, error } = await supabase.from("users").select("id, username").eq("id", id).single();

    if(data){
        const genres = await selectGenreById(data.id)
        
        if(genres){
            return {...data, genres }
        }
        
    }

    if(error){
        console.log(error);
        return false;
    }
}