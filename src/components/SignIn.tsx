import whiteLogo from "../assets/logos/deepsify-black.png"
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [rememberForThirtyDays, setRememberForThirtyDays] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (email === 'deepsify@gmail.com' && password === "12345678") {
            navigate('/dashboard');
        } else {
            setErrorMessage('Invalid email or password');
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    };

    return (
        <div className="w-full min-[900px]:w-1/2 flex justify-center items-center">
            <div className="w-72 md:w-80 flex flex-col gap-y-8">
                <div className="flex flex-col items-center gap-y-6">
                    <img className="w-12" src={whiteLogo} alt="logo white" />
                    <div className="text-center flex flex-col gap-y-3">
                        <h2 className="text-3xl font-semibold">Welcome back</h2>
                        <h4 className="text-[#94969C]">Welcome back! Please enter your details.</h4>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>

                        <div className="flex flex-col gap-y-[6px]">
                            <label className="text-sm font-medium text-[#CECFD2]" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="border border-[#333741] rounded-lg w-full bg-transparent py-[10px] px-[14px] placeholder-[#85888E] text-input"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-y-[6px] mt-5">
                            <label className="text-sm font-medium text-[#CECFD2]" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="border border-[#333741] rounded-lg w-full bg-transparent py-[10px] px-[14px] placeholder-[#85888E] text-input"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="h-4 py-1">
                            {errorMessage && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}
                        </div>

                        <div className="my-6 text-[#CECFD2] text-xs md:text-sm flex justify-between">
                            <label className={`flex items-center font-medium relative ${rememberForThirtyDays ? 'checked' : ''}`}>
                                <input className="appearance-none w-4 h-4 rounded border border-[#333741]" type="checkbox" checked={rememberForThirtyDays} onChange={() => setRememberForThirtyDays(!rememberForThirtyDays)} /> <span className="ml-2">Remember for 30 days</span>
                                <span className="tick absolute w-2 h-2 bg-white transform rotate-45 top-[6px] left-1"></span>
                            </label>
                            <span className="font-semibold cursor-pointer">Forgot password</span>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <button className="bg-[#7F56D9] w-full rounded-lg py-[10px] font-semibold">
                                Sign in
                            </button>
                            <button className="w-full flex justify-center gap-x-3 rounded-lg py-[10px] font-medium border border-[#333741]">
                                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                                <span>Sign in with Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
