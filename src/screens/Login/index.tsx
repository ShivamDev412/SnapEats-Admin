import { FormControl } from "@mui/material";
import Button from "@/components/Button";
import AuthWrapper from "@/Wrappers/AuthWrapper";
import { InputField } from "@/components/Input";
import { useLogin } from "./useLogin";
import Logo from "@/assets/logo.svg";

const Login = () => {
  const { register, handleSubmit, onSubmit, errors, getValues, isLoading } =
    useLogin();
  return (
    <AuthWrapper>
      <FormControl
        component="form"
        className="w-full lg:w-8/12 bg-white rounded-md text-zinc-900 h-full lg:h-[70%] justify-center gap-4 "
        style={{ padding: "2rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="h-auto w-[2.5in] mx-auto">
          <img src={Logo} alt="brand_logo" className="w-full h-full" />
        </div>
        <h2 className="text-4xl text-center font-semibold mb-5">Log In</h2>
        <InputField
          id={"email"}
          label={"Email"}
          type={"text"}
          register={register}
          errors={errors}
          getValues={getValues}
        />
        <InputField
          id={"password"}
          label={"Password"}
          type={"password"}
          register={register}
          errors={errors}
          getValues={getValues}
        />

        <Button type="submit" variant="contained" disabled={isLoading}>
          Submit
        </Button>
      </FormControl>
    </AuthWrapper>
  );
};

export default Login;
