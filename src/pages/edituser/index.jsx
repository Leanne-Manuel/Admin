import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import endpoints from "../../api/endpoints";
import "./edit.css";
import { useParams, Navigate, useLocation, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { edit } = useParams();
  const navigate = useNavigate();

  console.log("====================================");
  console.log(edit);
  console.log("====================================");

  const { mutateAsync } = useMutation(
    ({ name, lastname, id }) => {
      endpoints.updateUser({
        name,
        lastname,
        id,
      });
    },
    {
      onSuccess: () => {
        toast.success("Usuario Editado Com sucesso!!");
         setTimeout(() => {
          navigate("/Usuarios");
        }, 3000);
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await mutateAsync(data).catch((res) => {
      if (res.response.status === 200) {
      } else if (res.response.status === 500) {
        toast.error("Erro interno do servidor");
      }
    });
  };

  register("id", { value: edit });

  return (
    <div className="geral">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nome" {...register("name")} />
        <input
          type="text"
          placeholder="Ultimo Nome"
          {...register("lastname")}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
