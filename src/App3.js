import { useState } from "react";
import Test from "./components/TestComponent";

function App3() {
  const [show, setShow] = useState(false);
  return <>

    <button onClick={() => setShow(!show)}>{show ? "Gizle": "Göster"}</button>
    <br />
    {show && <Test/>}
  </>;
}

export default App3;
