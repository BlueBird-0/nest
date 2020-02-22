import React from 'react';
import "./Home.css"
import {Typography} from "@material-ui/core";

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }

    render() {
        return (
            <React.Fragment>
                <div className={"home"}>
                    {/*<img src={"/images/home_background.jpg"}/>*/}
                    {/*<div className={"opacity"}/>*/}
                    <div>
                        <Typography variant={'h4'}>전인학</Typography>
                        <Typography variant={'h6'}>Jeon In Hak</Typography>
                        <Typography variant={'body1'} style={{whiteSpace: 'nowrap'}}>https://github.com/BlueBird-0</Typography>

                    </div>
                </div>
            </React.Fragment>
            )
    }
}

export default Home;
