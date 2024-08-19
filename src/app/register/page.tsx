"use client";
import { RegisterUser } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type TUserData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserData>();

  const router = useRouter();

  const onSubmit = async (data: TUserData) => {
    // console.log(data);

    try {
      const res = await RegisterUser(data);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        router.push("/login");
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
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full border-green-300 border-2 p-8 rounded-lg shadow-lg  shadow-green-400">
        <h2 className="text-2xl font-bold text-center ">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-6">
            <div className="">
              <label className="sr-only">Name</label>
              <input
                {...register("username")}
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                {...register("email")}
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Register
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-green-600 hover:text-green-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
