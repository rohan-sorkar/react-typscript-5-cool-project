import { useState } from "react";
import shortid from "shortid";

interface InputStateType {
  inputA: number;
  inputB: number;
}

interface PerformOperationType {
  operation: string;
  inputState: InputStateType;
}

interface HistoryType {
  id: string;
  inputA: number;
  inputB: number;
  operation: string;
  result: number;
  date: Date;
}

const App = () => {
  const [inputState, setInputState] = useState<InputStateType>({
    inputA: 0,
    inputB: 0,
  });
  const [result, setResult] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<string>();
  const [histories, setHistories] = useState<HistoryType[]>();
  const [restoreId, setRestoreId] = useState<string>();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const performOperation = ({
    operation,
    inputState,
  }: PerformOperationType) => {
    if (inputState.inputA === 0 || inputState.inputB === 0) return;
    const performer = new Function(
      `return ${inputState.inputA} ${operation} ${inputState.inputB}`
    );
    const performedResult = performer();
    setResult(performedResult);
    setActiveBtn(operation);
    const newHistory: HistoryType = {
      id: shortid.generate(),
      inputA: inputState.inputA,
      inputB: inputState.inputB,
      operation: operation,
      result: performedResult,
      date: new Date(),
    };
    setHistories((prev) => (prev ? [newHistory, ...prev] : [newHistory]));
  };

  const stateCleaner = () => {
    setInputState({ inputA: 0, inputB: 0 });
    setResult(0);
    setActiveBtn("");
  };

  const restoreHistory = (history: HistoryType) => {
    setInputState({inputA: history.inputA, inputB: history.inputB});
    setResult(history.result);
    setActiveBtn(history.operation);
    setRestoreId(history.id);
  }

  return (
    <div className="app">
      <div className="history_container">
        <h1 className="result_heading">Result = {result}</h1>
        <div>
          <input
            type="number"
            name="inputA"
            value={inputState.inputA}
            onChange={inputChangeHandler}
          />
          <br />
          <input
            type="number"
            name="inputB"
            value={inputState.inputB}
            onChange={inputChangeHandler}
          />
          <br />

          <div className="btn_group">
            <button
              onClick={() => performOperation({ operation: "+", inputState })}
              style={
                activeBtn === "+"
                  ? { backgroundColor: "#414a4c", color: "white" }
                  : {}
              }
            >
              +
            </button>
            <button
              onClick={() => performOperation({ operation: "-", inputState })}
              style={
                activeBtn === "-"
                  ? { backgroundColor: "#414a4c", color: "white" }
                  : {}
              }
            >
              -
            </button>
            <button
              onClick={() => performOperation({ operation: "*", inputState })}
              style={
                activeBtn === "*"
                  ? { backgroundColor: "#414a4c", color: "white" }
                  : {}
              }
            >
              *
            </button>
            <button
              onClick={() => performOperation({ operation: "/", inputState })}
              style={
                activeBtn === "/"
                  ? { backgroundColor: "#414a4c", color: "white" }
                  : {}
              }
            >
              /
            </button>

            <button onClick={stateCleaner} className="clear_btn">
              clear
            </button>
          </div>
        </div>
        <h2 className="history_heading">History</h2>
        {!histories && <h4>There is no History yet🤨</h4>}
        <div>
          {histories?.map((history) => (
            <div className="history">
              <div style={{ display: "flex" }}>
                <p>Operation: {history.inputA} {history.operation} {history.inputB}</p>
                <p style={{ marginLeft: "14PX" }}>Result = {history.result}</p>
              </div>
              <p>{history.date.toLocaleDateString()} 🤡 {history.date.toLocaleTimeString()}</p>
              <button onClick={() => restoreHistory(history)} disabled={history.id === restoreId} className="restore_btn">Restore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
