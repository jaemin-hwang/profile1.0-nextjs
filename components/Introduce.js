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


const Introduce = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div id = "section-a" className={classes.profile}>
                <div>
                    <img src={profileImage} width={"50%"}/>
                </div>
                <div>
                    안녕하세요 개발자 황재민입니다.



                    // scroll 기준으로 탭 변경되게 바꾸자
                </div>
            </div>
            <div id = "section-b" className={classes.profile}>
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
                <div id = "section-c" className={classes.profile}>
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