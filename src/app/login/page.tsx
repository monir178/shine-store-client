// src/app/login/page.tsx
import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { RiGoogleLine } from "react-icons/ri";

const Login = async () => {
  const session = await auth();
  const user = session?.user;
  if (user) {
    console.log("user is here");
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center mx-4 md:mx-0">
      <div className="max-w-md w-full border-green-300 border-2 p-8 rounded-lg shadow-lg  shadow-green-400">
        <h2 className="text-2xl font-bold text-center ">Login</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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

        {/* Providers */}
        <section className=" flex justify-center items-center gap-4 my-6">
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}>
            <button className="bg-black text-white rounded-lg p-2 flex items-center gap-2">
              <BsGithub size={24} />
              <span>Github</span>
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}>
            <button className="bg-red-500 text-white rounded-lg p-2 flex items-center gap-2">
              <RiGoogleLine size={24} strokeWidth={2} />
              <span>Google</span>
            </button>
          </form>
        </section>

        <p className="mt-4 text-center text-sm ">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-green-500 hover:text-green-600">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
