import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

  const [form, setForm] = useState({
    mobile: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [icon, setIcon] = useState(true)

  const handleToggle = () => {
    setIcon(!icon)
  }

  return (
    <div className='w-full flex-col mt-4 flex items-center'>
        <h1 className='text-xl font-bold'>Login</h1>
       
        <div class="p-2 w-full md:w-1/3">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Mobile No. 
                  </label>
                  <input
                    type={"Number"}
                    id="message"
                    name="message"
                    value={form.mobile}
                    onChange={(e) => setForm({...form, mobile: e.target.value})}
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full md:w-1/3">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Password 
                  </label>

                  <div className='flex '>
                  <input
                    id="message"
                    name="message"
                    value={form.password}
                    type={icon === true ? "password" : "text"}
                    onChange={(e) => setForm({...form, password: e.target.value})}
                    class="w-full bg-gray-100 rounded-l text-base outline-none text-gray-700 py-1 px-3 resize-none leading-8 transition-colors border-none duration-200 ease-in-out"
                    />
                   <div className='bg-gray-100 rounded-r border-none flex items-center'>
                    <button onClick={handleToggle}>
                    {
                      icon === true ? <VisibilityIcon height={30} color='primary'/>
                      :
                      <VisibilityOffIcon height={30} color='primary'/>
                    }
                    </button>
                    
                    </div>
                    </div>

                </div>
              </div>
              <button class="flex mx-auto text-white bg-green-600 border-0 py-2 my-4 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                    {loading ? <TailSpin height={25} color="white"/> : 'Login'}
                </button>
    
                <div>
                  <p>Do not have account? <Link to={"/signup"}><span className='text-blue-500'>Sign Up</span></Link></p>
                </div>
    </div>
  )
}

export default Login
