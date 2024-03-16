import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@material-tailwind/react";

const CharitySignup = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full rounded-xl mx-auto mt-4p-8 border">
                <ButtonGroup color="gray" fullWidth variant="outlined">
                    <Button onClick={() => navigate('/signup')}>Donor</Button>
                    <Button>Organization</Button>
                </ButtonGroup>
            </div>
            <div className="max-w-md w-full rounded-xl border-slate-200 mx-auto mt-4 bg-white p-8 border">
                <div className="mt-1">
                    <div className="text-3xl font-bold text-gray-500 mb-7 text-center">Create an Account</div>
                </div>
                <form action="" className="space-y-6 mx-5">
                    <div className="flex items-center border-b border-black py-2">
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Organization Name" />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Business Email" />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Mission Statement" />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Password" />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Confirm Password" />
                    </div>
                    <div>
                        <button className="mt-3 mb-1 w-full py-2 px-4 bg-green-100 hover:bg-green-900 rounded-md text-white font-bold text-base" onClick={() => navigate('/org')}>Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="max-w-md w-full mx-auto mt-6">
                <p className="text-center font-light text-lg ">Already have an account? <a href="" className="font-semibold underline decoration-1 decoration-dotted hover:decoration-solid underline-offset-4" onClick={() => navigate('/login')}>Sign in.</a></p>
            </div>
        </div>
    );
  };
  
  export default CharitySignup;