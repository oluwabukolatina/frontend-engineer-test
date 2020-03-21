import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container,Jumbotron, Row} from "react-bootstrap";
import axios from 'axios'
import NavView from "./NavView";

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData().then(data => {
            if (data.features) {
                setLoading(false)
                setData(data.features.map(res => (res.attributes)).filter(r => r.Type === "Movie"))
            }

        }).catch(err => {
            if (err) {
                setLoading(false)
            }
        });
    }, []);

    async function getData() {
        setLoading(true)
        const response = await axios.get(`https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json`);
        return response.data
    }

    // OBJECTID: 4474
    // Type: "Movie"
    // IMDbLink: "http://www.imdb.com/title/tt1710927/"
    // Address: "3211 Monte Vista Boulevard NE"
    // ShootDate: 1254441600000
    // OriginalDetails: "Monte Vista Elementary - no ITC/no closures"

    const displayData =
        data && data.length
            ? data.map((dat, i) => {
                return (
                    <Fragment>
                        <Col xs={12} sm={4} className="details" key={dat.OBJECTID}>
                            {/*<Image src="https://via.placeholder.com/150" circle className="profile-picture"/>*/}
                            <h3 className="person-heading">{dat.Title}</h3>
                            <p>{dat.Site}</p>
                            <hr/>
                        </Col>

                    </Fragment>
                )
            })
            : 'no data';




    return (
        <Container>
            <NavView/>

            <Row className="show-grid text-center" style={{paddingTop: '4%'}}>

                {displayData}
            </Row>

        </Container>

    );
};

export default App;