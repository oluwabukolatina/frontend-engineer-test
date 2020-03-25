import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container, Form} from "react-bootstrap";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import {GOOGLE_API_KEY} from "./Keys";
import moment from "moment";

const App = () => {
    const [data, setData] = useState([]);
    const [selectMovies, setSelectMovies] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [movie, setMovie] = useState({})

    const center = {
        lat: 	35.106766,
        lng: -106.629181
    };

    async function getData() {
        const response = await axios.get(`https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json`);
        return response.data
    }

    useEffect(() => {
        getData().then(data => {
            if (data.features) {
                setData((data.features).filter(r => r.attributes.Type === "Movie"));
                setSelectMovies((data.features).filter(r => r.attributes.Type === "Movie"))
            }
        }).catch(err => {
            if (err) {
            }
        });
    }, []);

    const onChange = (e) => {
        const {value} = e.target;
        if(value){
            setData(selectMovies.filter(res => res.attributes.Title === value));
        }

    };

    const getSelectedMovie = (param) => {
        setMovie(param.attributes)

    };

    const displayMap = () => {
        if(data.length){
           return data.map(da => (
                <Marker
                    position={{lat: Number(da.geometry.y), lng: Number(da.geometry.x)}}
                    key={da.attributes.OBJECTID}
                        onClick={() => {
                            getSelectedMovie(da);
                            setIsOpen(true)
                        }}>
                    {isOpen && da.attributes.OBJECTID === movie.OBJECTID? <InfoWindow
                         position={{lat: Number(da.geometry.y), lng: Number(da.geometry.x)}}
                    >
                        <div>
                            <h3 style={{textAlign: 'center'}}>{movie.Title}</h3>
                            <h4>Shoot Date: {moment(movie.ShootDate).format('DD-MM-YYYY')}</h4>
                            <h4>Movie Site: {movie.Site}</h4>
                            <h4>Movie Address: {movie.Address}</h4>

                        </div>
                    </InfoWindow>: null}

                </Marker>
            ))
        }
        return null
    };

    return (
        <Container>
            <Form style={{    marginLeft: '67%',
                marginTop: '3%' }}>

                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Select A Movie</Form.Label>
                    <Form.Control as="select" size="lg" custom onChange={onChange} name="title">
                        <option>Choose</option>
                        {selectMovies ?selectMovies.map(movie => (

                            <option key={movie.attributes.OBJECTID} value={movie.attributes.Title} id="titleId">{movie.attributes.Title}</option>
                        )): null}

                    </Form.Control>
                </Form.Group>
            </Form>
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={GOOGLE_API_KEY}
                >

                    <GoogleMap
                        id='ground-example'
                        mapContainerStyle={{
                            height: "700px",
                            width: "100%"
                        }}
                        zoom={11}
                        center={center}
                    >

                        {displayMap()}

                    </GoogleMap>
                </LoadScript>


        </Container>
    );
};

export default App;