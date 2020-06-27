import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import getPictureDate from '../services/getPictureDate'
import getPreviousDay from '../services/getPreviousDay'
import getNextDay from '../services/getNextDay'

import Bookmark from '../components/Bookmark'

function AstronomyPictureOfDay() {
    const [astrology, setAstrology] = useState([]);
    const [dayBefore, setDayBefore] = useState([]);
    const [dayAfter, setDayAfter] = useState([]);
    const [startDate, setStartDay] = useState(new Date());
    const [currentDate, setCurrentDay] = useState(new Date());
    const [showPicture, setShowPicture] = useState(false);
    const [showYoutube, setShowYoutube] = useState(false);

    useEffect(() => { //did mount
        const today = moment(startDate).format('YYYY-MM-DD')
        getTodayPicture(today)
        getPreviousPicture(today)
        getNextPicture(today)
    }, []);


    async function getTodayPicture(date) {
        const datePic = await getPictureDate(date)
        console.log(datePic.data)
        setAstrology(datePic.data)
        // console.log(astrology)
    }

    async function getPreviousPicture(date) {
        const previous = moment(date).subtract(1, 'days').format('YYYY-MM-DD')
        const picPrevious = await getPreviousDay(previous);
        setDayBefore(picPrevious)
    }

    async function getNextPicture(date) {
        try {
            const next = moment(date).add(1, 'days').format('YYYY-MM-DD')
            const picNext = await getNextDay(next);
            if (typeof picNext === 'undefined') {
                setDayAfter([])
                setShowPicture(false)

            } else {
                const picNext = await getNextDay(next);
                setDayAfter(picNext)
                setShowPicture(true)
            }

        } catch (error) {
            console.log(error)
        }
    }

    // function mediaType(data) {
    //     switch (data.media_type) {
    //         case ('video'):
    //             return (
    //                 <div>
                      
    //                 </div>
                    
    //             )

    //         case ('image'):
    //             return (
    //                 <img
    //                     className="rounded mx-auto d-block w-100"
    //                     src={data.hdurl}
    //                     alt="First slide"
    //                 />
    //             )
    //         default:
    //             return null
    //     }
    // }


    function handleDatepickerChange(date) {
        console.log('handleDatepickerChange' + date)
        console.log(moment(date).format('YYYY-MM-DD'))
        const specDay = moment(date).format('YYYY-MM-DD')
        if (date > startDate) {
            console.log('no puedes ingresar fechas despues del' + startDate)
        }
        setCurrentDay(date)
        getTodayPicture(specDay)
        getNextPicture(specDay)
        getPreviousPicture(specDay)
    }




    return (

        <div>
            <div className='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                    <div className="container mb-2 mt-4 text-center">
                        <h2>Astronomy Picture of the Day</h2>
                    </div>

                    <div className="container mb-4">


                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Select date and display Astronomy Picture of the Day
                                    </Card.Text>
                                <DatePicker
                                    selected={currentDate}
                                    onChange={date => handleDatepickerChange(date)}
                                    maxDate={startDate}
                                    minTime={new Date("Jun 16, 1995")}
                                />
                            </Card.Body>
                        </Card>


                    </div>

                    <div className='container-fluid' >
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="rounded mx-auto d-block w-100"
                                    src={dayBefore.url}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{dayBefore.title}</h3>
                                    <p><small>{dayBefore.explanation}</small></p>
                                    <p><small>{dayBefore.date}</small></p>
                                    <Bookmark {...dayBefore} />
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="rounded mx-auto d-block w-100"
                                    src={astrology.hdurl}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>{astrology.title}</h3>
                                    <p><small>{astrology.explanation}</small></p>
                                    <p><small>{astrology.date}</small></p>
                                    <Bookmark {...astrology} />
                                </Carousel.Caption>
                            </Carousel.Item>

                            {showPicture &&
                                <Carousel.Item>
                                    <img
                                        className="rounded mx-auto d-block w-100"
                                        src={dayAfter.url}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>{dayAfter.title}</h3>
                                        <p><small>{dayAfter.explanation}</small></p>
                                        <p><small>{dayAfter.date}</small></p>
                                        <Bookmark {...dayAfter} />
                                    </Carousel.Caption>

                                </Carousel.Item>
                            }
                        </Carousel>
                    </div>

                </div>
            </div>

        </div>
    );
}




export default AstronomyPictureOfDay