import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import { SAVE_ARRAY_OF_PICTURES, DELETE_PICTURE, DELETE_ALL_PICTURES } from '../store/actions/types';
import { useDispatch, useSelector } from "react-redux";

function FavoritePictures() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const favoritePictures = useSelector(state => state.astronomy.favoritePictures)
    // const [favoritePictures, setFavoritePictures] = useState([])
    const [enableButtonDelete, setEnableButtonDelete] = useState(false)

    useEffect(() => {
        const arrayOfPicturesFromLocalStorage = JSON.parse(localStorage.getItem("favoritePictures") || "[]")
        // setFavoritePictures(arrayOfPicturesFromLocalStorage)
        dispatch({type: SAVE_ARRAY_OF_PICTURES, arrayOfPictures: arrayOfPicturesFromLocalStorage});
    }, [])

    function deletePictureOfFavorites(data) {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                let index = favoritePictures.indexOf(data);
                if (index > -1) {
                    favoritePictures.splice(index, 1);
                }
                dispatch({type: DELETE_PICTURE, data });
                localStorage.setItem("favoritePictures", JSON.stringify(favoritePictures));
                // setFavoritePictures(favoritePictures)
               // window.location.reload();
                // Swal.fire(

                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        })

    }

    function deleteAllFavoritePictures() {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                // setFavoritePictures([])
                localStorage.setItem("favoritePictures", JSON.stringify([]));
                dispatch({type:DELETE_ALL_PICTURES})
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                    <div className="container mb-2 mt-4 text-center">
                        <h2>Favorite Astronomy Pictures</h2>
                    </div>

                    <div className="container mb-4">


                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Would you like to delete all your favorite pituctures?
                                </Card.Text>

                                <Button variant="danger" onClick={() => deleteAllFavoritePictures()}>Delete</Button>
                            </Card.Body>
                        </Card>


                    </div>

                    <div className="container-fluid">

                        <CardDeck>
                            {favoritePictures.map(item => (
                                <div key={item}>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img className="img-thumbnail" variant="top" src={item.hdurl} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Footer>
                                                <small className="text-muted">
                                                    <DeleteIcon onClick={() => deletePictureOfFavorites(item)} />
                                                </small>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>


                                </div>
                            ))}
                        </CardDeck>




                    </div>

                    <div className='container-fluid' >

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FavoritePictures