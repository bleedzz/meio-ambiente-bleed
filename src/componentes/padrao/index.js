import Banner from 'componentes/banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Padrao({children}) {
  return (
    <main>
        <Banner/>

        <Outlet/>
        {children}
    </main>
  )
}
