import React, {useState} from 'react';
import {subscribeToCommand} from '../../helper/SocketHelper';

export default function MainOverlay(props) {
    const [commandMessage, setCommandMessage] = useState("Testing");

    subscribeToCommand(setCommandMessage);
    
    return (
        <div>
            {commandMessage}
        </div>
    )
}