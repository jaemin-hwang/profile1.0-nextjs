import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Introduce from "./Introduce";
import TabTab from "./TabTab";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    indicator: {
        backgroundColor: '#fcb835',
        height:"5px",
        borderRadius:"20px 20px 20px 20px",
    }
}));

export default function Tabbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} style={{width: "100%"}}>
            <AppBar position="static" style={{backgroundColor: "#000000"}}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{textAlign:"right"}}
                      variant="scrollable" scrollButtons="auto"
                      classes={{
                          indicator: classes.indicator
                      }} >

                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="About" {...a11yProps(1)} />
                    <Tab label="Resume" {...a11yProps(2)} />
                    <Tab label="Education" {...a11yProps(3)} />
                    <Tab label="Contact" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TabTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                간단한 소개
            </TabPanel>
            <TabPanel value={value} index={2}>
                경력사항?
            </TabPanel>
            <TabPanel value={value} index={3}>
                교육사항
            </TabPanel>
            <TabPanel value={value} index={4}>
                연락처
            </TabPanel>
        </div>
    );
}