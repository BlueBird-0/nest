import React from 'react'
import Box from '@material-ui/core/Box'
import Skill from "./Skill";
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper : {
        padding: '20px',
    },
    paper : {
        width: 100,
        height: 100,
    }
}))

function Skills() {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Box className={"skill-items"}>
                <Grid container justify={"center"} spacing={5}>
                    <Grid item >
                        <Skill url={"https://static1.squarespace.com/static/5726c0f6e321405ebae84138/5b203a85562fa7731a170535/5b217c0070a6addf58704480/1528998378484/react-logo-1000-transparent.png?format=1500w"}/>
                    </Grid>
                    <Grid item>
                        <Skill url={"https://static1.squarespace.com/static/5726c0f6e321405ebae84138/5b203a85562fa7731a170535/5b217c0070a6addf58704480/1528998378484/react-logo-1000-transparent.png?format=1500w"}/>
                    </Grid>
                    <Grid item>
                        <Skill url={"https://static1.squarespace.com/static/5726c0f6e321405ebae84138/5b203a85562fa7731a170535/5b217c0070a6addf58704480/1528998378484/react-logo-1000-transparent.png?format=1500w"}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        )
}

export default Skills