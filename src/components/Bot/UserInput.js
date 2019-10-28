import React from 'react';

const UserInput = (props) => {

    return (
        <div>
            <input
                value={props.value} 
                onChange={props.changed} />
        </div>
    )
    
}

export default UserInput;