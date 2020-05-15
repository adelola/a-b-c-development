import React , { useState, useEffect } from 'react';
import One from './../images/trains_1.svg';
import Two from './../images/trains_2.svg';
import Three from './../images/trains_3.svg';
import Four from './../images/trains_4.svg';
import Five from './../images/trains_5.svg';
import Six from './../images/trains_6.svg';
import Seven from './../images/trains_7.svg';
import Eight from './../images/trains_8.svg';
import Nine from './../images/trains_9.svg';
import Ten from './../images/trains_0.svg';


const TrainAvatar = (props) =>{
    let index = props.index % 10;

    if (index == 0) {
        return <One width={200} height={200} />;
    }
    else if (index === 1){
        return <Two width={220} height={220} />
    }
    else if (index === 2){
        return <Three width={180} height={180} />
    }
    else if (index === 3){
        return <Four width={240} height={240} />
    }
    else if (index === 4){
        return <Five width={200} height={200} />
    }
    else if (index === 5){
        return <Six width={250} height={250} />
    }
    else if (index === 6){
        return <Seven width={200} height={200} />
    }
    else if (index === 7){
        return <Eight width={200} height={200} />
    }
    else if (index === 8){
        return <Nine width={200} height={200} />
    }
    return <Ten width={230} height={230}/>;
}


export default TrainAvatar