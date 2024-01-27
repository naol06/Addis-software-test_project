export const addToFav=({song, singer, rating, songDescription,image, id })=>{
return{
    type:"ADD_TO_FAV",
   items:{
      song:song, 
      singer:singer,
      rating:rating,
      songDescription:songDescription,
      image:image,
      id:id
      
    }
}
}
export const removeFromFav=(id )=>{
    return{
        type:"REMOVE_FROM_FAV",
        id:id,
    }
    }
    export const updateData=({song, singer, rating, songDescription,image, id } )=>{
        return{
            type:"UPDATE_DATA",
            update:{
                song:song, 
                singer:singer,
                rating:rating,
                songDescription:songDescription,
                image:image,
                id:id
            }
        }
        }