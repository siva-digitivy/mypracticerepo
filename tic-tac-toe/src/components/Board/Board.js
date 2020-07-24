import React from 'react';
import Square from './Square/Square';
import {connect} from 'react-redux';
import './Board.css';
import Summary from './Summary/Summary'
function Board(props){
    //TODO:get this from redux
const board=props.board

return(
    <React.Fragment>
<div id="board" className="row mt-3">
    {board.map((symbol,i)=><Square key={i} index={i} symbol={symbol}/>)}
</div>
<div className="mt-4" >
<Summary/>
</div>
</React.Fragment>)
}
export default connect(({board})=>({board}))(Board)