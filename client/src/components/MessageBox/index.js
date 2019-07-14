import React from 'react';
import { Alert } from 'reactstrap';

const MessageBox = props =>{
    const { notif } = props;

    return(
        <div className='message-box'>
            {notif.isActive && <Alert color={notif.type}>{notif.message}</Alert>}
        </div>
    );
};

export default MessageBox;