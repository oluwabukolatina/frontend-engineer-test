import React from 'react';
import {Card, Container, Form} from "react-bootstrap";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import {GOOGLE_API_KEY} from "./Config";
import moment from "moment";
import useFetch from "./hooks/useFetch";

const App = () => {

    const {data, selectMovies, isOpen, movie, onChange,getSelectedMovie} = useFetch();

    const center = {
        lat: 	35.106766,
        lng: -106.629181
    };

    const displayMap = () => {
        if(data.length){
           return data.map(da => (
                <Marker
                    position={{lat: Number(da.geometry.y), lng: Number(da.geometry.x)}}
                    key={da.attributes.OBJECTID}
                        onClick={() =>
                            getSelectedMovie(da)
                        }>
                    {isOpen && da.attributes.OBJECTID === movie.OBJECTID? <InfoWindow
                         position={{lat: Number(da.geometry.y), lng: Number(da.geometry.x)}}
                    >
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{movie.Title}</Card.Title>
                                <Card.Text>
                                    Shoot Date: {moment(movie.ShootDate).format('DD-MM-YYYY')}
                                </Card.Text>
                                <Card.Text>
                                    Movie Site:{movie.Site}.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </InfoWindow>: null}

                </Marker>
            ))
        }
        return null
    };

    return (
        <Container>
            <Form style={{
                marginLeft: '67%',
                marginTop: '3%' }}>

                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Select A Movie</Form.Label>
                    <Form.Control as="select" size="lg" custom onChange={onChange} name="title">
                        <option>Choose</option>
                        {selectMovies ? selectMovies.map(movie => (
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
                            height: "1200px",
                            width: "100%"
                        }}
                        zoom={12}
                        center={center}
                    >
                        {displayMap()}
                    </GoogleMap>
                </LoadScript>
        </Container>
    );
};

export default App;