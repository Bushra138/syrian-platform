import './App.css'
import Header from './components/Header/header'
import SignUpForm from './components/SignUp/signup'
import SignInForm from './components/SignIn/signin'
import ForgetPassward from './components/ForgetPassward/forgetpassward'
import NewPassward from './components/NewPassward/newpassward'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <div dir='rtl' className='bg-gradient-to-b from-cyan-50 to-white  '>
  <Header/>
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/" element={<SignUpForm />} />
      <Route path="/forgetpassward" element={<ForgetPassward/>}/>
      <Route path='/newpassward' element={<NewPassward/>}/>
    </Routes>
 </div>
 </>
  )
}

export default App
