import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  }

  const handleSubstract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  }

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  }

  return(
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncrement} type="button" className="btn btn-primary btn-lg px-4 gap-3">+1</button>
        <button onClick={handleDecrement} type="button" className="btn btn-success btn-lg px-4">-1</button>
        <button onClick={handlePrivacyToggle} type="button" className="btn btn-warning btn-lg px-4">PRIVACY TOGGLE</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
        <input type="text" placeholder="Enter number" ref={inputElement} />
        <button onClick={handleAdd} type="button" className="btn btn-info btn-lg px-4">Add</button>
        <button onClick={handleSubstract} type="button" className="btn btn-danger btn-lg px-4">Substract</button>
      </div>
    </>
  )
}

export default Controls;