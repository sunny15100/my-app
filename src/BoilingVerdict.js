/**
 * Created by sxj on 2017/6/30.
 */
import React, { Component } from 'react';
function BolilingVerdict(pros){
    if(pros.celsius>=100){
        return <p> The Water would boil.</p>
    }
    return <p>The water would not boil.</p>
}
export default BolilingVerdict