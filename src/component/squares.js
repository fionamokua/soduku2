import { render } from "@testing-library/react";
import React from "react";
import "./square.css"
import Buttons from "'/home/fiona/Desktop/solve/soduku/src/component/buttons.js"
const Squares=()=>
{

var squarez=[];
var squarenum=9;
for (let i=0;i<squarenum;i++)
{
    squarez.push(<div className="squares"><Buttons/></div>)

}
render()
{
    return squarez;
}
};
export default Squares 