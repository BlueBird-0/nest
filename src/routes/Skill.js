import React from 'react'
import PropTypes from 'prop-types'
import './Skill.css'
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    img: {
        width: 100,
        height: 100,
    }
}))

function Skill({url}) {
    const classes = useStyles()
    return (
        <Grid item className={classes.img} >
            <div className={"img-wrapper img1"}>
                <img alt={"Crop"} src={url}/>
                <div className={"darkness"}/>
                <div className={"btn-plus"}>
                    <div draggable={"false"}>
                        React
                    </div>
                </div>
            </div>
        </Grid>
    )
}
Skill.propTypes = {
    url: PropTypes.string.isRequired
}

export default Skill