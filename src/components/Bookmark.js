import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { useDispatch, useSelector } from 'react-redux'
import { SAVE_PICTURE } from '../store/actions/types';
import Swal from 'sweetalert2'

function Bookmark(props) {
    const favoritePictures = useSelector(state => state.astronomy.favoritePictures)
    const [favorite, setFavorite] = useState([])
    const [findPicture, setFindPicture] = useState(false)
    //const [favoritePictures, setFavoritePictures] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        
    },[])

    function savePicture() {
        let favoritesImages = JSON.parse(localStorage.getItem("favoritePictures") || "[]");
        //let findPictureInFavorite =  findPictureInFavoritePictures(props)
        setFindPicture(findPictureInFavoritePictures(props))
        if (findPicture === false) {
            favoritesImages.push(props);
            setFavorite(props)
            localStorage.setItem("favoritePictures", JSON.stringify(favoritesImages));
            //setFavoritePictures(favoritesImages)
            dispatch({ type: SAVE_PICTURE, pictureData: props })
            
            
        } else {
           
            Swal.fire('this images existe in favorite pictures')
            console.log('this images existe in favorite pictures')
         
        }

    }

    function findPictureInFavoritePictures(picture) {
        console.log('picture',picture)
        let index = favoritePictures.includes(picture);
        console.log('index',index)
        return index
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
                {<FavoriteIcon style={{ color: '#ff0000' }} />}
            </Button>

        </OverlayTrigger>
    )
}

export default Bookmark
//  <Button onClick={changeBookmark}>

//             <FavoriteBorderIcon style={{ color: '#ff0000' }} />
//         </Button>