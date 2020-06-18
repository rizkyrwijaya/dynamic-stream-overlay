import React , {useRef} from 'react';
import {sendToCommand} from "../../../helper/SocketHelper";

export default function SocketSender(props){
    const inputCommand = useRef(null);
    const onButtonClick = () => {
        sendToCommand(inputCommand.current.value);
    }

    return (
        <div className="">
            <input type="text" ref={inputCommand}/>
            <button onClick={onButtonClick}>Send</button>
        </div>
    )
}