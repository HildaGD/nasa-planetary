import {
    SAVE_PICTURE,
    DELETE_PICTURE,
    DELETE_ALL_PICTURES,
    SAVE_LIST_FAVORITE_PICTURES
} from '../actions/types'

const initialState =  {favoritePictures: []}

export default function (state = initialState, action) {

    switch (action.type) {
        case SAVE_LIST_FAVORITE_PICTURES:
            const newFavoritePicturesList = action.favoritePicturesList;
            return {
                ...state,
                favoritePictures: state.favoritePictures.concat( newFavoritePicturesList )
            }
        case SAVE_PICTURE:
            const newPicture = action.pictureData;
            return {
                ...state,
                favoritePictures: state.favoritePictures.concat( newPicture )
            }
         
        case DELETE_PICTURE:
            const pictoreDataDelete = action.data;
            const valuesFavoritesPicturesList = Object.values(state.favoritePictures)
            const favoritePicturesUpdated = [...valuesFavoritesPicturesList]
            const indexOfPictoreDataDelete = favoritePicturesUpdated.findIndex((element) => pictoreDataDelete === element);
            const newListFavoritesPictures = favoritePicturesUpdated.filter((element, index) => index !== indexOfPictoreDataDelete);
            return {
                ...state,
                favoritePictures: newListFavoritesPictures,
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