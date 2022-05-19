import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { formContact } from "../../Utils/Validations";

export const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    Swal.fire({
      position: 'center',
      icon: 'succes',
      title: '¡Formulario enviado!',
      showConfirmButton: false,
      timer: 3000,
    });
    reset();
  };
  return (
    <footer>
      <section className="footer-container">
        <h2 className="title-footer"></h2>
        <h3 className="subtitle-footer"></h3>
        <div className="footer">
          <ul className="errors-container">
            <li>
              {errors.name ? <small>{errors.email.message}</small> : null}
            </li>
            <li>
              {errors.email ? <small>{errors.email.message}</small> : null}
            </li>
            <li>
              {errors.comment ? <small>{errors.comment.message}</small> : null}
            </li>
          </ul>
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              {...register("name", formContact.name)}
            />
            <input
              type="email"
              name="mail"
              placeholder="Email"
              {...register("email", formContact.email)}
            />

            <textarea
              name="comment"
              cols="30"
              rows="10"
              placeholder="Ingrese su mensaje..."
              {...register("comment", formContact.comment)}
            ></textarea>

            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </footer>
  );
};
