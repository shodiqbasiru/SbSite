"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import React, { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const username = e.target.username.value;
      const password = e.target.password.value;
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });
      if (!res?.error) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center text-slate-100">
      <div className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-lg shadow-slate-700/50">
        <h2 className="mb-6 text-center text-2xl font-bold text-amber-500">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                placeholder="Username"
                id="username"
                type="text"
                name="username"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <InputText
                placeholder="Password"
                id="password"
                type="password"
                name="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-amber-500 px-4 py-2 font-bold text-white hover:bg-amber-600 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-amber-500 hover:text-amber-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
