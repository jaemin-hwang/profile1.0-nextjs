import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import profileImage from '../public/assets/PhotoView.jpg';
import { Fade, Slide } from "react-awesome-reveal";

const useStyles = makeStyles(theme => ({
    root: {

    },

    profile: {
        display: 'flex',
        flexDirection: 'row'
    }
}));


const Introduce = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                </div>
            </div>
            <div className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                </div>
            </div>
            <Slide direction={"right"} triggerOnce>
                <div className={classes.profile}>
                    <div>
                        <img src={profileImage} width={"50%"}/>
                    </div>
                    <div>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                        asdasdasdasdasd<br/>
                    </div>
                </div>
            </Slide>

            <div className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                </div>
            </div>
            <div className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                </div>
            </div>
            <div className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                </div>
            </div>
            <div className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                    asdasdasdasdasd<br/>
                </div>
            </div>
        </div>
    );
};

export default Introduce;