import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import img from '../assets/img/branding.jpg';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
}));

function Navbar() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        SALBA
                        </Typography>

                        <IconButton color="inherit">
                            <img src={img} width="40px" height="40px" className={classes.imagen}/>
                            </IconButton>
                                
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    );
}

export default Navbar;