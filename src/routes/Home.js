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
                <Box className={"home"}>
                    <Box>
                        <div className={"typewriter"}>
                            <h1>안녕하세요</h1>
                        </div>
                    </Box>
                </Box>
            </React.Fragment>
            )
    }
}

export default Home;
