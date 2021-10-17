import { render } from "@testing-library/react";
import React from "react";
import "./square.css"
const Squares=()=>
{

var squarez=[];
var squarenum=9;
for (var i=0;i<squarenum;i++)
{
    squarez.push(<div className="squares"><Buttons/></div>)
}
render()
{
    return squarez;
}
};
const Buttons =()=>
{
    var buttonz=[];
    var buttonum=9;
    for (var i=0;i<buttonum;i++)
    {
        buttonz.push(<button className="small-buttons"></button>)
    }
    render()
    {
        return buttonz
    }


};
export default Squares 