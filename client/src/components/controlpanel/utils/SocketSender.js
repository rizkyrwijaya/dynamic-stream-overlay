import React , {useRef} from 'react';
import {sendToCommand} from "../../../helper/SocketHelper";

export default function SocketSender(props){
    const inputCommand = useRef(null);
    const onButtonClick = () => {
        sendToCommand(inputCommand.current.value);
    }

    return (
        <div className="">
            <input className="border" type="text" ref={inputCommand}/>
            <button className="bg-gray-200 hover:bg-gray-300 border" onClick={onButtonClick}>Send</button>
        </div>
    )
}