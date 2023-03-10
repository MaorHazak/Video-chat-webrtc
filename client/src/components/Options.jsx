import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


import { SocketContext } from '../SocketContext';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
    },
}));



const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, connection, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();

    const handleClick = () => {
        callUser(idToCall)
        // call.isRecivedCall(true)
        console.log("name: ",name)
        console.log("call ",call)
        console.log("idTocall: ", idToCall)
        console.log("callAccepted: ",callAccepted)
        console.log("is recived call: ", call.isRecivedCall)
        console.log("me: ",me)
        console.log("call user:",callUser )
      }

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete='off'>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>Account Info</Typography>
                            <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            {/*console.log(me)*/}
                            <CopyToClipboard text={me} className={classes.margin}>
                                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>

                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>Paste & Call</Typography>
                            <TextField label='ID to Call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <>
                                <Button variant='contained' color='secondary' fullWidth onClick={leaveCall} className={classes.margin} startIcon={<PhoneDisabled fontSize='large' />}>
                                    End call
                                </Button>
                                </>
                            ) : (
                                <>
                                {/*     onClick={console.log("call user:",callUser,"idTocall:", idToCall,"callAccepted:", callAccepted, )} className={classes.margin} startIcon={<Phone fontSize='large' />} */}
                                <Button variant='contained' fullWidth color='primary' onClick={handleClick} className={classes.margin} startIcon={<Phone fontSize='large' />}>
                                    Call
                                </Button>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>

        </Container>
    )
}

export default Options
