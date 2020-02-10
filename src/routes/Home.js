import React from 'react';
import Proptypes from 'prop-types';
import axios from 'axios'
import Movie from '../conponents/Movie'
import "./Home.css"
import Container from '@material-ui/core/Container'
import {Box} from "@material-ui/core";

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }

    render() {
        return (
            <React.Fragment>
                <div className={"home"}>
                    <div>
                        <h1>전인학</h1>
                        <h1>https://github.com/BlueBird-0</h1>
                    </div>
                </div>
            </React.Fragment>
            )
    }
}

export default Home;
