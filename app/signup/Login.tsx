import {useState} from "react"
import axios from "axios"
import { useAuth } from '../AuthContext';
import Link from 'next/link'
const Login = ({click,register,setId,setUser}:any) => {
  const auth = useAuth();
  const { setToken } = auth;
  
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('')
    const handleSubmit = async (event:any) => {

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email= formData.get('email')
        const password =formData.get('password')
        try {
          setLoading(true);
          const response = await axios.post('http://localhost:3000/api/login', {
            email: email,
            password: password,
          });
          console.log(response,"response")
          const {token, id,role} = response.data; 
        
          if (id && token) {
            console.log( id,token,role,"role")
       
           

            // const { token } = response.data;
            setToken(token);
            setRole(role)
            setErrorMessage('');
            setLoading(false);
            setId(id)
            setUser(response.data)
            console.log(role)
            
          } else {
       
            setErrorMessage('Login failed. Please check your credentials.');
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage('Error during login. Please try again.');
          setLoading(false);
        }
       
      };
      let link=null
            if(role=="user")
           
        
            link = <Link href="/adminComponents">Dashboard</Link>;
              
             
            
            if(role==="seller"){
                return <Link href="/adminComponents">Navigate to seller</Link>
            }
            if(role==="admin"){
                return <Link href="/adminComponents">Navigate to Admin</Link>;
            }
           
    return ( 
        <div className="flex justify-center">
        <div className="bg-white p-8 shadow-md w-[371px]">
        {link}
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-6">Welcome! Please log in to your account.</p>
        <form   onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
            <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
            <div className="text-center mt-4 flex items-center justify-between"><div className="w-[143px] h-[56px] bg-red text-white flex items-center justify-center rounded"><button type="submit"  >login</button></div><span onClick={()=>click(!register)} className="text-red text-sm hover:cursor-pointer">Register</span></div>
            {errorMessage && (
          <div className="error-message1">
            {errorMessage}
          </div>)}
   
        </form>
  

      

      
    </div>
    </div>
 );
}
 
export default Login;