import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {

    },
    title: {
        fontFamily: 'Noto Sans KR',
        fontSize: '17px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#2e2e2e'
    },
    subtitle_grey: {
        fontFamily: 'Noto Sans KR',
        fontSize: '24px',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#8c8c8c'
    },
    subtitle_purple: {
        fontFamily: 'Noto Sans KR',
        fontSize: '24px',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#8d00af'
    },
    contents: {
        fontFamily: 'Noto Sans KR',
        fontSize: '14px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#2e2e2e'
    },
    contents_r_grey: {
        fontFamily: 'Noto Sans KR',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#8c8c8c'
    },
    contents_r_black: {
        fontFamily: 'Noto Sans KR',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#2e2e2e'
    },
    poppins: {
        fontFamily: "Poppins",
        fontSize: '27px',
        fontWeight: 200,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:1.4,
        letterSpacing: 'normal',
        color: '#8d00af'
    },
}));


const MainPage = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            asdasdasd
        </div>
    );
};

export default MainPage;