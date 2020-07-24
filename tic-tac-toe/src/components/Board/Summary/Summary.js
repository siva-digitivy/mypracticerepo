import React from "react";
import { connect } from "react-redux";
import { checkResult } from "../../../actions/resultAction";
function Summary(props) {
  const players = props.players;
  const result = props.result;
  const { board, checkResult } = props;
  if (!(result.win || result.tie)) {
    console.log(result)
    checkResult(board);
  }

  if (result.tie) {
    return <div className="alert alert-info mt-2">It's a Draw</div>;
  } else if (result.win === "X") {
    const player = players.p1 === "X" ? "Player1" : "Player2";
    return <div className="alert alert-success mt-2">{player} Wins!</div>;
  } else if (result.win === "O") {
    const player = players.p1 === "O" ? "Player1" : "Player2";
    return <div className="alert alert-success mt-2">{player} Wins!</div>;
  }
  return (
    <React.Fragment>
      <div>
        <p>
          <strong>Current Turn</strong>:
          {players.turn === "p1" ? (
            <span className="badge badge badge-primary">Player1</span>
          ) : (
            <span className="badge badge badge-success">Player2</span>
          )}
        </p>
        <p>
          <strong>Player1</strong>:{players.p1}{" "}
        </p>
        <p>
          <strong>Player2</strong>:{players.p2}{" "}
        </p>
      </div>
    </React.Fragment>
  );
}
export default connect(
  ({ board, players, result }) => ({ board, players, result }),
  (dispatch) => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(Summary);
