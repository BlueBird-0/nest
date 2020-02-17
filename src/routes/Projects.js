import React from 'react'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Project01 from "./Project01";
import {Container, Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: { }
}))

function Projects() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container spacing={3}>
                <Project01/>
                <Project01/>
                <Project01/>
            </Grid>
        </Container>
        )

}

export default Projects