import { useNavigate } from "react-router-dom";
import { useYupForm } from "../../../hook/useYupForm";
import { registerSvcCaller } from "../../../services/auth/register/register.svc";
import Typography from "../../../atoms/typography";
import Input from "../../../atoms/input";
import Button from "../../../atoms/button";
import { schemaFormRegister } from "./schema";
import ContainerAuthLottie from "../../../organisms/container-auth-lottie/ContainerAuthLottie";

const FormRegister = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, getError } = useYupForm({
    schema: schemaFormRegister,
    onSubmit: (values) => {
      registerSvcCaller.execute(values);
    },
  });

  return (
    <ContainerAuthLottie>
      <Typography as="h1">Create an account</Typography>
      <Typography as="p">Join us tonight</Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div>
          <Input {...register("username")} placeholder="Username" />
          {getError("username") && <p className="text-red-500 text-sm mt-1">{getError("username")}</p>}
        </div>

        <div>
          <Input {...register("email")} placeholder="you@example.com" />
          {getError("email") && <p className="text-red-500 text-sm mt-1">{getError("email")}</p>}
        </div>

        <div>
          <Input {...register("password")} type="password" placeholder="••••••••" />
          {getError("password") && <p className="text-red-500 text-sm mt-1">{getError("password")}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit" className="text-white w-full" variant="primary">
            Register
          </Button>
          <Button className="text-black w-full" color="default" onClick={() => navigate("/")}>
            Back to Login
          </Button>
        </div>
      </form>
    </ContainerAuthLottie>
  );
};

export default FormRegister;
