import { useYupForm } from "../../../hook/useYupForm";
import { loginSvcCaller } from "../../../services/auth/login/login.svc";
import Typography from "../../../atoms/typography";
import Input from "../../../atoms/input";
import Button from "../../../atoms/button";
import { schemaFormLogin } from "./schema";
import { getLottieUrl } from "../../../assets/utils";
import LottiePlayer from "../../../atoms/lottie-player/LottiePlayer";

const FormLogin= ()=> {
  const { register, handleSubmit, getError } = useYupForm({
    schema: schemaFormLogin,
    onSubmit: (values) => {
      loginSvcCaller.execute(values)
    }
  });

  return (
    <div className="flex items-center justify-center">
      <LottiePlayer src={getLottieUrl("newFeed")} loop width={300} height={300} />

      <div className="w-full max-w-sm border rounded-xl p-8">
        
        <Typography as="h1">Welcome back</Typography>
        <Typography as="p">Sign in to continue</Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input {...register("username")} placeholder="Username" />
          {getError("username") && <p>{getError("username")}</p>}

          <Input {...register("password")} type="password" placeholder="••••••••" />
          {getError("password") && <p>{getError("password")}</p>}

          <div className="flex gap-2 ">
            <Button type="submit" className="text-white w-full" variant="primary">
              Sign in
            </Button>

            <Button className="text-black w-full" color="warning">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin
