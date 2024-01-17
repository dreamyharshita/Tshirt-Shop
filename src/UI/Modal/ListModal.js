import React from "react";
import './ListModal.css';

import ReactDOM from 'react-dom';

const BackDrop=(props)=>{
    return <div className="backdrop" onClick={props.onClose}></div>
}

const Overlay=(props)=>{
    return <div className="modal" >{props.children}</div>
}

const ListModal=(props)=>{
return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlay'))}
    </React.Fragment>
)
}

export default ListModal;