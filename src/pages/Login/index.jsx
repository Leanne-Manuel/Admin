import React, { useContext } from "react";
import "./Login.css";
// import "./Mains.js";
import { AuthContext } from "../../context/AuthContext.tsx";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Boa! Você está logado!", {
    icon: "👏",
    duration: 3000,
  });

function LoginForm() {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(
    ({ email, password }) => context.signIn({ email, password }),
    {
      onSuccess: () => {
        notify();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSubmit = async (data) => {
    console.log(data);
    await mutateAsync(data).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="bcL">
      <div className="bcg1"></div>
      {isLoading && <Loading />}

      <div className="containerForm">
        <h2>Unify Admin</h2>
        <h4>© Unify 2023, Todos direitos reservados</h4>
        <form className="formContent" onSubmit={handleSubmit(onSubmit)}>
          <label></label>

          <input
            className="texti"
            type="text"
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            className="texti"
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />

          <div className="divCheck">
            <input type="checkbox" />
            <span className="">Remember Password</span>
          </div>
          <button className="env1" type="submit">
            Sign in
          </button>
          
        </form>
        <div className="rigth"></div>
      </div>
      <Toaster />
    </div>
  );
}

export default LoginForm;
