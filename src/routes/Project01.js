import React, {Component} from 'react'
import {Paper, Grid, Box, Card, CardContent, Typography, CardMedia} from "@material-ui/core";

const useStyles = theme =>({
    root: {
        display: 'flex',
    },
    wrapper: {
        spacing: 6,
    },
    cover: {
        width:151,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    comment : {
        paddingTop: '0px',
    },
});
const classes = useStyles();

class Project01 extends Component {
    state = {
        boards: {
            brdno: 1,
            brdtitle:'Project Title',
            brdgithub:'Github repository : www.naver.comalasmd/kldnlkd/adasa',
            brbdcomment:'comment: 네 오늘도 뭐 신긴한 프로그래밍을 해봤습니다.',
            brdate: new Date(),
        }
    }

    render() {
        const { boards } = this.state
        return (
            <Grid item xs={12} sm={6} >
                <Paper elevation={10} className={classes.wrapper}>

                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent>
                                <Typography component={'h5'} variant={'h5'}>
                                    {boards.brdtitle}
                                </Typography>
                                <Typography variant={'subtitle1'} color={'textSecondary'}>
                                    {boards.brdgithub}
                                </Typography>
                            </CardContent>

                            <div>
                                <CardContent className={classes.comment}>
                                    <Typography>
                                        {boards.brbdcomment}
                                    </Typography>
                                </CardContent>
                            </div>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={"https://static1.squarespace.com/static/5726c0f6e321405ebae84138/5b203a85562fa7731a170535/5b217c0070a6addf58704480/1528998378484/react-logo-1000-transparent.png?format=1500w"}
                            title={"Project cover image"}
                        />
                    </Card>

                </Paper>
            </Grid>
        );
    }
}

export default Project01;