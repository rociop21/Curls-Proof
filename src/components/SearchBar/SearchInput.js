import React from 'react';


const SearchInput = (props) => {

    return (
        <div>
            <input
                value={props.value} 
                onChange={props.changed}
                label="Seach" />
            <button onClick={props.clicked} disabled={props.disabled}>Search</button>
        </div>
    );
}

export default SearchInput;