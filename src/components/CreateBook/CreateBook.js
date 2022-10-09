import React from "react";
import { useForm } from "react-hook-form";
import "./createBook.css";
import { v4 as uuidv4 } from "uuid";

const CreateBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors)

  const onSubmit = (data, e) => {
    const bookData = {
      title: data.title.trim(),
      gender: data.gender.trim(),
      year: data.year,
      author: data.author.trim(),
      synopsis: data.synopsis.trim(),
      id: uuidv4(),
      //author: [string, string, string]
    };

    console.log(bookData);

    // limpiar campos
    e.target.reset();
  };

  const addAuthors = () => {
    console.log("click");
  };

  return (
    <section className="form">
      <div className="form__titulo">
        <p className="form__titulo-detalle">Please complete the form.</p>
      </div>

      <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-section">
          <label>
            <h2 className="form__input-title">Title: </h2>
          </label>
          <input
            id="title"
            className="form__input"
            type="text"
            placeholder="Max 30 characters"
            autoComplete="off"
            {...register("title", {
              required: {
                value: true,
                message: "The title input is required",
              },
              maxLength: {
                value: 30,
                message: "Must be less than 30 characters",
              },
            })}
          />
        </div>
        {errors.title && <span className="form__input-error">{errors.title.message}</span>}

        <div className="form__input-section">
          <label>
            <h2 className="form__input-gender">Gender: </h2>
          </label>
          <input
            id="gender"
            className="form__input"
            type="text"
            placeholder="Max 20 letters"
            autoComplete="off"
            {...register("gender", {
              required: {
                value: true,
                message: "The gender input is required",
              },
              maxLength: {
                value: 20,
                message: "Must be less than 20 letters",
              },
            })}
          />
        </div>
        {errors.gender && <span className="form__input-error">{errors.gender.message}</span>}

        <div className="form__input-section">
          <label>
            <h2 className="form__input-year">Year: </h2>
          </label>
          <input
            id="year"
            className="form__input"
            type="date"
            placeholder="Max 30 letters"
            autoComplete="off"
            {...register("year", {
              required: {
                value: true,
                message: "The year input is required",
              },
            })}
          />
        </div>
        {errors.year && <span className="form__input-error">{errors.year.message}</span>}

        <div className="form__input-section">
          <label>
            <h2 className="form__input-author">Author: </h2>
          </label>
          <input
            id="author"
            className="form__input"
            type="text"
            placeholder="Max 30 letters"
            autoComplete="off"
            {...register("author", {
              required: {
                value: true,
                message: "The author input is required",
              },
              maxLength: {
                value: 30,
                message: "Must be less than 30 letters",
              },
            })}
          />
          <span onClick={addAuthors}>(+)</span>
        </div>
        {errors.author && <span className="form__input-error">{errors.author.message}</span>}

        <div className="form__textarea-section">
          <label>
            <h2 className="form__input-synopsis">Synopsis: </h2>
          </label>
          <textarea
            className="form__textarea"
            name="synopsis"
            id="synopsis"
            rows="5"
            placeholder="Please enter a short summary"
            {...register("synopsis", {
              required: "The synopsis input is required",
            })}
          />
        </div>
        {errors.synopsis && <p className="form__input-error">{errors.synopsis.message}</p>}

        <button className="form__btn" id="formBtn">
          Load up
        </button>
      </form>
    </section>
  );
};

export default CreateBook;
