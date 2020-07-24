import React from "react";
import Cross from "./Cross/Cross";
import Zero from "./Zero/Zero";
import { connect } from "react-redux";
import { drawXAction,drawOAction } from "../../../actions/boardActions";
import {toggleTurnAction} from "../../../actions/playerActions";


function Square(props) {
  const { symbol, index, draw, players,board,toggleTurn} = props;
  const disabled = symbol ? 'disabled':""
  return (
    <div
      className={"cell" + disabled}
      onClick={() => draw(board, players, index).then(()=>{toggleTurn()})}
    >
      {symbol ? symbol === "X" ? <Cross /> : <Zero /> : ""}
    </div>
  );
}
const mapStateToProps = ({board, players }) => ({board, players });

const mapDispatchToProps=dispatch=>({
  draw:(board,players,cellIndex)=>{
    if(!board[cellIndex]){  
    if(players[players.turn]==='X'){
      return dispatch(drawXAction(cellIndex))
    }else{
      return dispatch(drawOAction(cellIndex))
    }
    //  const check = board.filter(symbol=>symbol===null)
    //  if(check.length===1){return dispatch(checkResult(board))}
    }},
  toggleTurn:()=>dispatch(toggleTurnAction())
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Square);
