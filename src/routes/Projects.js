import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Project01 from "./Project01";
import ProjectWrite from "./ProjectWrite"
import {Container, Grid, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        padding: '20px',
    },
}))

function Projects() {
    const classes = useStyles()
    return (
        <Container className={classes.wrapper}>
            <Container>
                <Typography align={'center'} variant={"h5"}>Projects</Typography>
            </Container>
            <Grid container spacing={3}>
                <ProjectWrite/>
                <Project01/>
                <Project01/>
                <Project01/>
            </Grid>
        </Container>
        )
}

export default Projects