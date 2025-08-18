import React from 'react'
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="coffee" className='overflow-hidden relative'>
       <div className="absolute -left-40 bottom-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"></div>
  <div className="absolute -right-40 bottom-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-150px] w-[700px] h-[200px] bg-rose-500/10 blur-3xl"></div>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App