import React from "react";
import UseSignUp from "../hooks/UseSignUp";

export default function SIgnUpForm() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmit,
        handleSignInGoogle,
    } = UseSignUp();

    return (
        <div className="w-[346px] h-[541px] bg-[#19191B] rounded-3xl text-white">
            <form onSubmit={handleSubmit} className="flex flex-col mx-[45px] justify-center h-full">
                <span className="text-base font-bold text-center">SIGN UP</span>
                <div className="flex flex-col gap-[18px] mt-[18px]">
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        placeholder="Email"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                    <input
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        type="password"
                        placeholder="Repeat Password"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className=" w-full bg-[#27272C] border-[1px] border-[#343434] h-[38px] rounded-[8px] mt-[41px]"
                >
                    Sign up
                </button>
                <span className="text-center mt-[30px] text-sm italic text-[#343434]">Or sign up using:</span>

                <button
                    type="button"
                    className=" w-[143px] bg-[#27272C] border-[1px] border-[#343434] h-[38px] rounded-[8px] mt-[22px] text-[#717171] mx-auto"
                    onClick={handleSignInGoogle}
                >
                    Google
                </button>

                <span className="text-center mt-[30px] text-sm italic text-[#343434]">
                    You do have an account? <b>Sign in</b>
                </span>
            </form>
        </div>
    );
}
