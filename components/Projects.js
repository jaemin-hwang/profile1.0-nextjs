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


const Projects = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            프로젝트
        </div>
    );
};

export default Projects;