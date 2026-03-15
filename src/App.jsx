import { Suspense } from 'react'
import './App.css'
import Countries from './assets/components/Countries/Countries'

const contriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {

  return (
    <> 
    <Suspense fallback={<p>The massage is loading........</p>}>
      <Countries contriesPromise={contriesPromise}></Countries> 
    </Suspense>
    </>
  )
}

export default App
