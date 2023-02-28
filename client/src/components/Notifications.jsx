import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const Notifications = (children) => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isRecivedCall && callAccepted && (

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{call.name} is calling</h1>
                    <Button variant='contained' color='primary' onClick={answerCall}>
                        Answer Call
                    </Button>
                </div>

            )}
        </>
    )
}

export default Notifications
