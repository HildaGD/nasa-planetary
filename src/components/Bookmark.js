import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { useSelector, useDispatch } from 'react-redux'
import { SAVE_PICTURE } from '../store/actions/types';

function Bookmark(props) {

    const [favorite, setFavorite] = useState([])
    const [favoritePictures, setFavoritePictures] = useState([])
    const dispatch = useDispatch()

    function savePicture() {
        if(findPictureInFavoritePictures(props)===false){
            let favoritesImages = JSON.parse(localStorage.getItem("favoritePictures") || "[]");
            favoritesImages.push(props);
            setFavorite(props)
            localStorage.setItem("favoritePictures", JSON.stringify(favoritesImages));
            setFavoritePictures(favoritesImages)
            dispatch({ type: SAVE_PICTURE, pictureData: props })
        }else{
            console.log('this images existe in favorite pictures')
        }
       
    }

    function findPictureInFavoritePictures(picture) {
        let index = favoritePictures.indexOf(picture);
        if (index === -1) {
            return false
        }else{
            return true
        }
    }

    return (

        <OverlayTrigger
            overlay={
                <Tooltip id={`tooltip-left`}>
                    <strong>Click here to save Picture</strong>.
                </Tooltip>
            }
        >
            <Button onClick={savePicture}>
                <FavoriteIcon style={{ color: '#ff0000' }} />
            </Button>

        </OverlayTrigger>
    )
}

export default Bookmark
//  <Button onClick={changeBookmark}>

//             <FavoriteBorderIcon style={{ color: '#ff0000' }} />
//         </Button>