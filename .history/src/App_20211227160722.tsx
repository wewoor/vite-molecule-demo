import { useState } from 'react'

import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

// import logo from './logo.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <MoleculeProvider extensions={[]}>
        <Workbench />
    </MoleculeProvider>
  )
}

export default App
