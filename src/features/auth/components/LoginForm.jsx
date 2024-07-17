import React, { useState } from "react";
import ButtonComponent from "../../common/components/ButtonComponent";
import UseSignIn from "../hooks/UseSignIn";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const { email, setEmail, password, setPassword, handleLogin, handleSignInGoogle } = UseSignIn();

    return (
        <div className="w-[346px] h-[541px] bg-[#19191B] rounded-3xl text-white">
            <form className="flex flex-col mx-[45px] justify-center h-full" onSubmit={handleLogin}>
                <span className="text-base font-bold text-center">INICIAR SESIÓN</span>
                <div className="flex flex-col gap-[18px] mt-[51px]">
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Contraseña"
                        className="w-full h-[38px] bg-[#19191B] border-[1px] border-[#343434] rounded-lg indent-3 text-sm outline-none"
                    />
                </div>
                <span className="text-xs text-[#717171] italic mt-[14px]">¿Olvidaste tu contraseña?</span>

                <ButtonComponent margin="40px 0 0 0" title="Iniciar sesión" />
                <span className="text-xs text-[#717171] italic text-center mt-[22px]">
                    O inicia sesión usando
                </span>

                <ButtonComponent
                    type="button"
                    margin="22px auto 0px"
                    title="Google"
                    textType="secondary"
                    width="143px"
                    onClick={handleSignInGoogle}
                />

                <span className="text-center mt-[30px] text-sm italic text-[#343434]">
                    ¿No tienes una cuenta?
                    <Link to={"/sign-up"}>
                        <b>Registrate</b>
                    </Link>
                </span>
            </form>
        </div>
    );
}
