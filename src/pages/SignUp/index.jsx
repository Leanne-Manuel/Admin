import "./signuo.css";

import React, { useContext } from "react";
import "./signuo.css";
// import "./Mains.js";
import endpoints from "../../api/endpoints";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserSchema } from "../../utils/user";

const notify = () =>
  toast("Registo feito, agora faca login!", {
    icon: "👏",
    duration: 3000,
  });

function RegForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(
    ({ email, password, name, username, lastname, password_confirmation }) => {
      endpoints.createUser({
        email,
        password,
        name,
        username,
        lastname,
        password_confirmation,
      });
    },
    {
      onSuccess: () => {
        notify();
        setTimeout(() => {
          navigate("/auth/login");
        }, 3000);
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },

    }
  );

  const onSubmit = async (data) => {
    console.log(data);
    await mutateAsync(data).catch((res) => {
      if (res.response.status === 401) {
        toast.error("Senha nao coincede");
      } else if (res.response.status === 500) {
        toast.error("Erro interno do servidor");
      }
    });
  };

  return (
    <div className="bcL1">
      <div className="bcg2"></div>
      {isLoading && <Loading />}

      <div className="containerForm1">
        <form className="formContent1" onSubmit={handleSubmit(onSubmit)}>
          <label></label>
          <input
            className="texti1"
            type="text"
            placeholder="Primeiro Nome"
            required
            {...register("name")}
          />
          <input
            className="texti1"
            type="text"
            placeholder="Ultimo Nome"
            required
            {...register("lastname")}
          />
          <input
            className="texti1"
            type="text"
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            className="texti1"
            type="text"
            placeholder="Nome de Utilizador"
            required
            {...register("username")}
          />

          <input
            className="texti1"
            type="password"
            placeholder="Palavra-Passe"
            required
            {...register("password")}
          />
          <input
            className="texti1"
            type="password"
            placeholder="Confirme a Passe"
            required
            {...register("password_confirmation")}
          />

          <div className="divCheck"></div>
          <button className="env2" type="submit">
            Sign Up
          </button>
          <Link to="/auth/login">
            <span>Voltar</span>
          </Link>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default RegForm;
