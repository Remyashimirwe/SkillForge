import axios from "axios"; // FECTH can also work but thats easier
import { useState } from "react";
import {toast} from 'react-hot-toast';
import { useNavigate} from 'react-router-dom'

function Login (){
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const {email, password} = data; 
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            if(data.error) { 
                toast.error(data.error)
            } else {
                setData({});
                toast.success('Logged in Successfully')
                navigate('/');
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="bg-blue-700/60 flex flex-col items-center space-y-5 justify-center rounded-4xl max-h-96 w-80">
            <h1 className="text-slate-100 font-medium text-2xl"> User Login</h1>
            <form onSubmit={loginUser}
            className="flex flex-col gap-y-4">
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                type="email" placeholder="EMAIL"/>
                
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                type="password" placeholder="PASSWORD"/>

                <button className="bg-indigo-800 w-full p-2.5 text-slate-200 text-xl font-bold cursor-pointer rounded-xl hover:bg-indigo-900"
                type="submit">LOGIN</button>
            </form>
        </div>


    )
}

export default Login;