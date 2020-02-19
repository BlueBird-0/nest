import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid, Typography} from "@material-ui/core";
import Project01 from "./Project01";



const useStyles = makeStyles(theme => ({
    wrapper: {
        padding: '20px',
    },
}))

function History(props) {
    const classes = useStyles()

    return (
        <Container className={classes.wrapper}>
            <Container>
                <Typography align={'center'} variant={"h5"}>History</Typography>
            </Container>
        </Container>
    )
}

export default History