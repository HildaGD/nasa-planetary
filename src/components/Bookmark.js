import React, { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'

function Bookmark(props) {
    const [changeImagetoFavoriteIcon, setChangeImageToFavoriteIcon] = useState(true)
    const [changeImageUnfavoriteIcon, setChangeImageUnfavoriteIcon] = useState(false)
    const [favoritePictures, setFavoritePictures] = useState([])

    useEffect(() => {
        
    }, [])

    function changeBookmark() {
        if(changeImagetoFavoriteIcon===false){
           setChangeImageToFavoriteIcon(true) 
        }else{
            setChangeImageToFavoriteIcon(false) 
        }
        
    }

    function saveFavoritePicture(){ 
        var favoritesImages = JSON.parse(localStorage.getItem("favoritePictures") || "[]");
        favoritesImages.push(props);
        localStorage.setItem("favoritePictures", JSON.stringify(favoritesImages));
        console.log(favoritesImages)
        setFavoritePictures(favoritesImages)
    }


    if (changeImagetoFavoriteIcon === false) {
        return (
            <Button onClick={changeBookmark && saveFavoritePicture()}>
                <FavoriteIcon style={{ color: '#ff0000' }} />
            </Button>

        )
    }else{
        return (
        <Button onClick={changeBookmark}>

            <FavoriteBorderIcon style={{ color: '#ff0000' }} />
        </Button>

    )
    }
    


}

export default Bookmark
