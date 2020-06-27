import {
    SAVE_PICTURE,
    DELETE_PICTURE,
    DELETE_ALL_PICTURES,
    SAVE_ARRAY_OF_PICTURES
} from '../actions/types'

const initialState =  {favoritePictures: []}

export default function (state = initialState, action) {

    switch (action.type) {
        case SAVE_ARRAY_OF_PICTURES:
            const newArrayOfPictures = action.arrayOfPictures;
            return {
                ...state,
                favoritePictures: state.favoritePictures.concat( newArrayOfPictures )
            }
        case SAVE_PICTURE:
            const newPicture = action.pictureData;
            return {
                ...state,
                favoritePictures: state.favoritePictures.concat( newPicture )
            }
         
        case DELETE_PICTURE:
            const elementToEliminate = action.data;
            const values = Object.values(state.favoritePictures)
            console.log('state.favoritePictures', state.favoritePictures)
            console.log('values', values)
            console.log(typeof state.favoritePictures)
            const favoritePicturesUpdated = [...values]
            console.log(typeof favoritePicturesUpdated)
            const indexOfElementToEliminate = favoritePicturesUpdated.findIndex((element) => elementToEliminate === element);

            const newArray = favoritePicturesUpdated.filter((element, index) => index !== indexOfElementToEliminate);
            return {
                ...state,
                favoritePictures: newArray,
            }
        case DELETE_ALL_PICTURES:
            return {
                ...state,
                favoritePictures: [],
            }
        default:
            return state
    }
}