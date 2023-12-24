import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Canvas} from '@react-three/fiber'
import ThreeBody from './components/ThreeBody'


function App() {
 

  return (
  
    <div className="h-screen w-full border">
      
            <Canvas className='w-full h-full' shadows>
                <Suspense fallback={null}>
                  <ThreeBody />
                </Suspense>
              </Canvas>
      </div>
    
  )
}

export default App
