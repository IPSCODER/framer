import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { motion } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}} >

      <motion.div id='box' style={{width:"200px",height:"200px",backgroundColor:"red"}} animate={{x:200,y:200 ,rotate:30}} transition={{
        duration:0.3,
        type:"spring"
      }} />


  </div> */}
  </React.StrictMode>,
)
