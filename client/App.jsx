import React, { useMemo, useRef } from 'react'
import styles from './App.module.scss';
import { Canvas, useFrame } from 'react-three-fiber'
// import { Effects } from './Effects'
// import { ResizeObserver } from '@juggle/resize-observer'
import * as THREE from 'three'

// --- original code
// const App = () => {
//   return (
//     <div>
//       <h1>hiiiiii World</h1>
//     </div>
//   )
// }

// hanging a Canvas element with a black background 
// #### not the entire page... MAKE ADJUSTMENTS
// <<< User option => background color >>>

const App = () => {
  return (
    <Canvas>
      <color attach="background" args = {['lightcyan']} />  
    </Canvas>
  )
}

export default App;