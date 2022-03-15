import React from 'react';
import {SingleBasicRef} from "./SingleBasicRef";
import {ArrayOfRefs} from "./ArrayOfRefs";
import {MapOfRefs} from "./MapOfRefs";

function App() {
  return <div style={{display: "flex", flexDirection: "column", width: 300}}>
    <SingleBasicRef/>
    <ArrayOfRefs/>
    <MapOfRefs/>
  </div>
}


export default App;
