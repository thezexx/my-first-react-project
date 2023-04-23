import { forwardRef, useRef } from "react";

function App() {
  const Input = forwardRef((props, ref) => {
    return <input type="text" ref={ref} {...props} />;
  });

  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Odaklan</button>
    </>
  );
}

export default App;
