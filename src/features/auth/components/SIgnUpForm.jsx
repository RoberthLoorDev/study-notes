import React from "react";
import UseSignUp from "../hooks/UseSignUp";
import ButtonComponent from "../../common/components/ButtonComponent";
import { Link } from "react-router-dom";

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
                <span className="text-base font-bold text-center">REGISTRARSE</span>
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
                        placeholder="Contraseña"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                    <input
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        type="password"
                        placeholder="Repetir contraseña"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                </div>

                <ButtonComponent title="Registrarse" type="submit" margin="41px 0 0 0" />

                <span className="text-center mt-[30px] text-sm italic text-[#343434]">Or sign up using:</span>

                <ButtonComponent
                    type="button"
                    margin="22px auto 0px"
                    title="Google"
                    textType="secondary"
                    width="143px"
                    onClick={handleSignInGoogle}
                />

                <span className="text-center mt-[30px] text-sm italic text-[#343434]">
                    You do have an account?
                    <Link to={"/login"}>
                        <b>Sign in</b>
                    </Link>
                </span>
            </form>
        </div>
    );
}
