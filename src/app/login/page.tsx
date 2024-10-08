"use client";

import ProvidersLogin from "@/components/ProvidersLogin";
import { loginUser } from "@/utils/actions/loginUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type TUserLoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserLoginData>();

  const router = useRouter();

  const onSubmit = async (data: TUserLoginData) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res?.accessToken) {
        toast.success(res?.message);
        localStorage.setItem("accessToken", res.accessToken);
        router.push("/");
      } else {
        toast.error(res?.message, {
          style: {
            background: "red",
            color: "white",
          },
        });
      }
    } catch (error: any) {
      console.log(error.message);

      throw new Error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-4 md:mx-0">
      <div className="max-w-md w-full border-green-300 border-2 p-8 rounded-lg shadow-lg  shadow-green-400">
        <h2 className="text-2xl font-bold text-center ">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label className="sr-only">Email address</label>
              <input
                {...register("email")}
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                {...register("password")}
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign In
            </button>
          </div>
        </form>
        {/* <ProvidersLogin /> */}
        <ProvidersLogin />
        <p className="mt-4 text-center text-sm ">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-green-500 hover:text-green-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
