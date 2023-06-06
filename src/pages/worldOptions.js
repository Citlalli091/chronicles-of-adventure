import React from 'react';

function WorldOptions(props){
    function clickAClick(){}
    return(<>
    <div>
        <button
        onClick={clickAClick()}>
            Adventures
        </button>
        <p>View all the Adventures associated with this World</p>
    </div>
    <div>
        <button
        onClick={clickAClick()}>
            Lore
        </button>
        <p>View all the Lore associated with this World</p>
    </div>
    <div>
        <button
        onClick={clickAClick()}>
            Characters
        </button>
        <p>View all the Characters associated with this World</p>
    </div>
    <div>
        <button
        onClick={clickAClick()}>
            Locations
        </button>
        <p>View all the Locations associated with this World</p>
    </div>
    </>)
}


export default WorldOptions;