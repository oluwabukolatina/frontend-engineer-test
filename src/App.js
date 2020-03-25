// import React, {Fragment, useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import axios from 'axios'
import NavView from "./NavView";
//
// const App = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false)
//     const [search, setSearch] = useState('')
//
//
//     useEffect(() => {
//         getData().then(data => {
//             if (data.features) {
//                 setLoading(false);
//                 setData(data.features.map(res => (res.attributes)).filter(r => r.Type === "Movie"))
//             }
//
//         }).catch(err => {
//             if (err) {
//                 setLoading(false)
//             }
//         });
//     }, []);
//
//     async function getData() {
//         setLoading(true);
//         const response = await axios.get(`https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json`);
//         return response.data
//     }
//
//     const onChange = (e) => {
//         const {value} = e.target;
//         setSearch(value)
//     };
//     const searchForMovie = (e) => {
//         if (e.key === "Enter") {
//             setLoading(true);
//
//             setData(data.filter(res => res.Title === search))
//             setLoading(false)
//         }
//
//     }
//     // OBJECTID: 4474
//     // Type: "Movie"
//     // IMDbLink: "http://www.imdb.com/title/tt1710927/"
//     // Address: "3211 Monte Vista Boulevard NE"
//     // ShootDate: 1254441600000
//     // OriginalDetails: "Monte Vista Elementary - no ITC/no closures"
//
//     const displayData =
//         data && data.length
//             ? data.map((dat, i) => {
//                 return (
//                     <Fragment>
//                         <Col xs={12} sm={4} className="details" key={dat.OBJECTID}>
//                             {/*<Image src="https://via.placeholder.com/150" circle className="profile-picture"/>*/}
//                             <h3 className="movie-heading">Title: {dat.Title}</h3>
//                             <p>Site: {dat.Site}</p>
//                             <p>Address: {dat.Address}</p>
//                             <hr/>
//                         </Col>
//
//                     </Fragment>
//                 )
//             })
//             : 'no data';
//
//
//
//
//     return (
//         <Container>
//             <NavView search={search} onChange={onChange} searchForMovie={searchForMovie}/>
//             <Form style={{    marginLeft: '67%',
//                 marginTop: '3%' }}>
//
//                 <Form.Group controlId="exampleForm.SelectCustomSizeLg">
//                     <Form.Label>Select A Movie</Form.Label>
//                     <Form.Control as="select" size="lg" custom>
//                         <option>Choose</option>
//                         <option>2</option>
//                         <option>3</option>
//                         <option>4</option>
//                         <option>5</option>
//                     </Form.Control>
//                 </Form.Group>
//             </Form>
//
//             <Row className="show-grid text-center" style={{paddingTop: '4%'}}>
//
//                 {loading ? <small>loading...</small>: displayData}
//             </Row>
//
//         </Container>
//
//     );
// };
//
// export default App;

import React, {useState, useEffect} from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {Container} from "react-bootstrap";

const App = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

        useEffect(() => {
        getData().then(data => {
            if (data.features) {
                setLoading(false);
                // console.log(data.features);

                // console.log((data.features).filter(r => r.attributes.Type === "Movie"));
                setData((data.features).filter(r => r.attributes.Type === "Movie"))

                // const total = data.features.map
                //     .map(res => (res.attributes).filter(r => r.Type === "Movie"))

                // const total = data.features
                //     .filter(person => person.isForceUser)
                //     .map(jedi => jedi.pilotingScore + jedi.shootingScore)
                //     .reduce((acc, score) => acc + score, 0);

                // const oldData = data.features[attributes]
                // console.log(     data.features.map(res => (console.log(res))))

                // setData(data.features.map(res => (res.attributes)).filter(r => r.Type === "Movie"))

            }

        }).catch(err => {
            if (err) {
                setLoading(false)
            }
        });
    }, []);


    async function getData() {
        setLoading(true);
        const response = await axios.get(`https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json`);
        return response.data
    }


    // OBJECTID: 4474
    // Type: "Movie"
    // IMDbLink: "http://www.imdb.com/title/tt1710927/"
    // Address: "3211 Monte Vista Boulevard NE"
    // ShootDate: 1254441600000
    // OriginalDetails: "Monte Vista Elementary - no ITC/no closures"


    const onCdhange = (e) => {
        const {value} = e.target;

        setSearch(value)
        //     const searchForMovie = (e) => {
//         if (e.key === "Enter") {
//             setLoading(true);
//
//             setData(data.filter(res => res.Title === search))
//             setLoading(false)
//         }
    };
    const [title, setTitle] = useState('')
    const onChange = (e) => {
        const {value} = e.target;
        if(value){
            // setData(data.filter(res => res.attributes.Type === value))
            // setData(data.filter(res => console.log(res)))
            setData(data.filter(res => res.attributes.Title === value))
        }

        // setData((data.features).filter(r => r.attributes.Type === "Movie"))

    }

    console.log(data)

    return (
        <Container>
            {/*<NavView search={search} onChange={onChange} searchForMovie={searchForMovie}/>*/}
            <Form style={{    marginLeft: '67%',
                marginTop: '3%' }}>

                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Select A Movie</Form.Label>
                    <Form.Control as="select" size="lg" custom onChange={onChange} name="title">
                        <option>Choose</option>
                        {data ?data.map(d => (

                            <option value={d.attributes.Title} id="titleId">{d.attributes.Title}</option>
                        )): null}
                        
                    </Form.Control>
                </Form.Group>
            </Form>
            <LoadScript
                id="script-loader"
                googleMapsApiKey="AIzaSyBu0SE7j9ZIX8Pxl_htyuM21IAUQhzSBBQ"

            >
                <GoogleMap
                    id='example-map'
                    mapContainerStyle={{
                        height: "700px",
                        width: "100%"
                    }}
                    zoom={11}
                    center={{
                        lat: 35.084385,
                        lng: -106.650421
                    }}
                >
                    {data.length ? data.map(da => (

                        // lat: 25.397, lng: -103.644

                        // <Marker position={{lat: da.geometry.x, lng: da.geometry.y}}/>
                        <Marker position={{lat: da.geometry.y, lng: da.geometry.x}}/>


                    )) : null}



                </GoogleMap>
            </LoadScript>

        </Container>
    );
};

export default App;