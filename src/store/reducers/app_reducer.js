import {
    SAVE_PICTURE,
    DELETE_PICTURE,
    DELETE_ALL_PICTURES
} from '../actions/types'

const initialState =  {favoritePictures: []}

export default function (state = initialState, action) {

    switch (action.type) {
        case SAVE_PICTURE:
            const newPicture = action.pictureData;//.pictureData;
            return {
                ...state,
                favoritePictures: state.favoritePictures.concat( newPicture )
            }
         
        case DELETE_PICTURE:
            const elementToEliminate = action.payload.data;
            const favoritePicturesUpdated = {...state.favoritePictures}
            // find index of element to eliminate: index found
            // const indexElementToEliminate = favoritePicturesClone.findIndex(({ picture }) => picture.elementToEliminate !== elementToEliminate);
            const indexOfElementToEliminate = favoritePicturesUpdated.findIndex((element) => elementToEliminate === element);
            // when it's ready, state.favoritePictures.remoce(index)
            // const deleteState = Object.assign({}, ...state, state.favoritePictures.remove(indexElementToEliminate))
            // return deleteState
            favoritePicturesUpdated.remove(indexOfElementToEliminate);
            return {
                ...state,
                favoritePictures: favoritePicturesUpdated,
            }
            // return {
            //     ...state,
            //     favoritePictures: state.favoritePictures.filter(singlePicture => singlePicture.id !== action.pictureId)
            // }
        case DELETE_ALL_PICTURES:
            return {
                ...state,
                favoritePictures: [],
            }
        default:
            return state
    }
}