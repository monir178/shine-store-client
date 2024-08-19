import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { RiGoogleLine } from "react-icons/ri";

const ProvidersLogin = () => {
  return (
    <div className="my-6">
      <p className="text-center mb-4 text-green-400">Or Sign Up Using</p>
      <div className="flex justify-center items-center gap-4 ">
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
          className="bg-black border-gray-400 border text-white rounded-lg p-2 flex items-center gap-2">
          <BsGithub size={24} />
          <span>Github</span>
        </button>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
          className="bg-red-500 text-white rounded-lg p-2 flex items-center gap-2">
          <RiGoogleLine size={24} strokeWidth={2} />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default ProvidersLogin;
