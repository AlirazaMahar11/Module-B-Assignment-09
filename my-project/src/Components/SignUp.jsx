import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <div className="absolute bg-green-600 w-full h-full" >
    <div className="relative ml-28 w-10/12 p-10 text-center mt-32 bg-white rounded-xl">
      <h1 className="text-5xl text-center font-bold font-serif mt-10">My SignUp Page</h1><br/>
      <input className="w-8/12 h-10 border border-black rounded-lg" type="text" placeholder="Enter Your Name"/><br/><br/>
        <input type="email" className="w-8/12 h-10 border border-black rounded-lg" placeholder="Enter Your Email"/><br/><br/>
        <input className="w-8/12 border h-10 border-black rounded-lg" placeholder="Enter Your Password" type="password"/><br/><br/>
        <button className="border w-32 h-10 rounded-lg bg-green-900 text-white hover:font-bold">Sign Up</button>&nbsp;&nbsp;&nbsp;
        <Link to='/SignIn' ><h1>Already Have an Account</h1></Link>
    </div>
    </div>
    </>
  )
}

export {SignUp};