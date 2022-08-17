import React, {Suspense} from 'react'
import Nav from './Nav'
import Loading from './Loading'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'


function Dashboard() {
  return (
    <div>
        <Nav/>
        <Suspense fallback={<Loading />}>
        <Component1/>
       <Component2/>
        <Component3/>
        </Suspense>
    </div>
  )
}

export default Dashboard