import axios from "axios"; // FECTH can also work but thats easier
import { useState } from "react";
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

function Register (){
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data;
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error) {
                toast.error(data.error)
            } else{
                setData({});
                toast.success('Registered successfully !');
                navigate('/login')
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <div className="bg-indigo-600/70 flex flex-col items-center space-y-8 justify-center rounded-4xl h-4/5 w-96">
            <h1 className="text-slate-100 font-medium text-2xl"> User Registration</h1>
            <form onSubmit={registerUser}
            className="flex flex-col gap-y-6 ">
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.name} onChange={(e) => setData({...data, name: e.target.value})}
                type="name" placeholder="NAME"/>
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                type="email" placeholder="EMAIL"/>
                
                <input 
                className="border-2 border-slate-200 p-2.5 pl-3.5 text-slate-900 rounded-md focus:outline-none placeholder:text-slate-200 placeholder:text-center"
                value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                type="password" placeholder="PASSWORD"/>

                <button className="bg-indigo-800 w-full p-2.5 text-slate-200 text-xl font-bold cursor-pointer rounded-xl hover:bg-indigo-900"
                type="submit">Register</button>
            </form>
        </div>


    )
}

export default Register;