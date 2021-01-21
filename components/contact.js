import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import profileImage from '../public/assets/PhotoView.jpg';
import { Fade, Slide } from "react-awesome-reveal";

const useStyles = makeStyles(theme => ({
    root: {

    },

    profile: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        marginBottom: '5%'
    }
}));


const Contact = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
           연락처~~~
        </div>
    );
};

export default Contact;