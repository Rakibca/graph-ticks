import { range } from "./utils";

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div className="row">
          {range(numCols).map((colIndex) => (
            <div className="cell" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
