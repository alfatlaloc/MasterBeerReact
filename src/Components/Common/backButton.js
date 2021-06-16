import React from 'react';
import {useHistory} from 'react-router-dom';

function BackButton(){
    const history = useHistory();
    return(
        <button className="float"
        onClick={
            evt =>{
                evt.preventDefault();
                history.goBack();
            }
        }
        >
            Back
        </button>
    );
}

export default BackButton;