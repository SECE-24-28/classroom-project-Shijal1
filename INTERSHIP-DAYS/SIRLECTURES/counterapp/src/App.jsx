import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <button onClick={() =>
         setCount(count + 1)
         }>Increase
          </button>
      <button onClick={() =>
         setCount(count - 1)
         }>Decrease
         </button>
      <button onClick={() => 
        setCount(0)
        }>Reset
        </button>
    </div>
  )
}

export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // Event handler function
//   function handleIncrease() {
//     setCount(count + 1);
//   }

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>React Event Handling</h2>

//       <h1>{count}</h1>

//       {/* Using event handlers */}
//       <button onClick={handleIncrease}>Increase</button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>

//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;
