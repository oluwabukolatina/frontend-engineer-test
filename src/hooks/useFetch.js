import {useEffect, useState} from "react";
import {MOVIES_URL} from "../Config";
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [selectMovies, setSelectMovies] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState({});

    async function getData() {
        const response = await axios.get(`${MOVIES_URL}`);
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
        setMovie(param.attributes);
        setIsOpen(true)
    };

    return{ data, selectMovies, isOpen, movie, onChange,getSelectedMovie}
};

export default useFetch;