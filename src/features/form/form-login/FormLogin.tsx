import { useNavigate } from "react-router-dom";
import { useYupForm } from "../../../hook/useYupForm";
import { loginSvcCaller } from "../../../services/auth/login/login.svc";
import Typography from "../../../atoms/typography";
import Input from "../../../atoms/input";
import Button from "../../../atoms/button";
import { schemaFormLogin } from "./schema";
import ContainerAuthLottie from "../../../organisms/container-auth-lottie/ContainerAuthLottie";
import { setTokenInCookie } from "../../../utils/app.utils";
import { SSOCOOKIES } from "../../../constants/cookies.const";

const FormLogin= ()=> {
  const navigate = useNavigate();
  const { register, handleSubmit, getError } = useYupForm({
    schema: schemaFormLogin,
    onSubmit: async (values) => {
      try {
        const res = await loginSvcCaller.execute(values);
        const token = res.data?.accessToken
        if (token) {
          setTokenInCookie(SSOCOOKIES.ACCESS_TOKEN, token);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login Error: ", error)
      }
    }
  });

  return (
    <ContainerAuthLottie>
      <Typography as="h1">Welcome back</Typography>
      <Typography as="p">Sign in to continue</Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div>
          <Input {...register("username")} placeholder="Username" />
          {getError("username") && <p className="text-red-500 text-sm mt-1">{getError("username")}</p>}
        </div>

        <div>
          <Input {...register("password")} type="password" placeholder="••••••••" />
          {getError("password") && <p className="text-red-500 text-sm mt-1">{getError("password")}</p>}
        </div>

        <div className="flex gap-2">
          <Button type="submit" className="text-white w-full" variant="primary">
            Sign in
          </Button>

          <Button className="text-black w-full" color="warning" onClick={() => navigate("/register")}>
            Sign up
          </Button>
        </div>
      </form>
    </ContainerAuthLottie>
  );
}

export default FormLogin
