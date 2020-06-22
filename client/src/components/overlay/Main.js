import React, {useState} from 'react';
import {subscribeToCommand} from '../../helper/SocketHelper';
import StartingSoon from './scenes/StartingSoon';



export default function MainOverlay(props) {
    const [overlay, setOverlay] = useState(null);

    function finishOverlay(){
        setOverlay(null);
    }

    function loadComponent(message){
        var params = message.split("-");
        switch(params[0]){
            case "startingsoon":
                if(params[1] != undefined){
                    setOverlay(<StartingSoon seconds={params[1]} endOverlay={finishOverlay}/>);
                } else {
                    setOverlay(<StartingSoon seconds={300} endOverlay={finishOverlay}/>)
                }
                break;
            default: 
                setOverlay(null);
                break;
        }
    }

    subscribeToCommand(loadComponent);
    
    return (
        <div>
            {overlay}
        </div>
    )
}