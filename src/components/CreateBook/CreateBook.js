import React from "react";
import { useForm } from "react-hook-form";
import "./createBook.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addBook } from '../../features/books/booksSlice'
import { useNavigate } from 'react-router-dom';


const CreateBook = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    //console.log('imagen desde Form: ',typeof(data.image))

    dispatch(addBook({
      title: data.title.trim(),
      imageLink: data.image,
      country: data.country.trim(),
      year: data.year,
      author: data.author.trim(),
      synopsis: data.synopsis.trim(),
      id: uuidv4(),}))
    navigate('/dashboard')

    // limpiar campos
    e.target.reset();
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
            <h2 className="form__input-gender">Image: </h2>
          </label>
          <input
            id="image"
            className="form__input"
            type="text"
            placeholder="Enter the image URL"
            autoComplete="off"
            {...register("image", {
              required: {
                value: true,
                message: "The image input is required",
              },
            })}
          />
        </div>
        {errors.image && <span className="form__input-error">{errors.image.message}</span>}

        <div className="form__input-section">
          <label>
            <h2 className="form__input-gender">Country: </h2>
          </label>
          <input
            id="country"
            className="form__input"
            type="text"
            placeholder="Max 20 letters"
            autoComplete="off"
            {...register("country", {
              required: {
                value: true,
                message: "The country input is required",
              },
              maxLength: {
                value: 20,
                message: "Must be less than 20 letters",
              },
            })}
          />
        </div>
        {errors.country && <span className="form__input-error">{errors.country.message}</span>}

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
