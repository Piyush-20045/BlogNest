import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full my-16">
      <SignIn signUpUrl="/register"/>
    </div>
  );
};

export default Login;
