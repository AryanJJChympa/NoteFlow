import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import PrivateRoutes from "./component/PrivateRoutes";

const App = () => {
  return (
    <div data-theme="dark" className='overflow-hidden relative'>
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-150px] w-[700px] h-[200px] bg-blue-500/10 blur-3xl"></div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={
          <PrivateRoutes>
            <HomePage />
          </PrivateRoutes>
          } />
        <Route path='/create' element={
          <PrivateRoutes>
            <CreatePage />
          </PrivateRoutes>
          } />
        <Route path='/note/:id' element={
          <PrivateRoutes>
            <NoteDetailPage />
          </PrivateRoutes>
          } />
      </Routes>
    </div>
  )
}

export default App