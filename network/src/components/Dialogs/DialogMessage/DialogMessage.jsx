import React from "react";
import './DialogMessage.scss';

const DialogMessage = (props) => {
    return (<div>
        <p>{props.message}</p>
    </div>)
}

export default DialogMessage;