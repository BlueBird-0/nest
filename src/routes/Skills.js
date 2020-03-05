import React from 'react'
import Skill from "./Skill";
import {Grid, Container, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper : {
        padding: '20px',
    }
}))

function Skills() {
    const classes = useStyles()
    return (
        <Container className={classes.wrapper}>
            <Container>
                <Typography align={'center'} variant={"h5"}>Skills</Typography>
            </Container>
            <Container className={"skill-items"}>
                <Grid container justify={"center"} spacing={5}>
                    <Grid item >
                        <Skill title={'React'} url={"https://static1.squarespace.com/static/5726c0f6e321405ebae84138/5b203a85562fa7731a170535/5b217c0070a6addf58704480/1528998378484/react-logo-1000-transparent.png?format=1500w"}/>
                    </Grid>
                    <Grid item>
                        <Skill title={'Kotlin'} url={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1024px-Kotlin-logo.svg.png"}/>
                    </Grid>
                    <Grid item>
                        <Skill title={'Android'} url={"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/android-512.png"}/>
                    </Grid>
                    <Grid item>
                        <Skill title={'Java'} url={"https://echoua.com/wp-content/uploads/2019/04/java.svg"}/>
                    </Grid>
                </Grid>
            </Container>
        </Container>
        )
}

export default Skills