import React from 'react'
import { useForm } from "react-hook-form";
import '../styles/createBook.css'

const CreateBook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    //console.log(errors)
  
    const onSubmit = (data, e)=>{

        const bookData ={
            title: data.title,
            gender: data.gender,
            year: data.year,
            author: data.author,
            description: data.description
        }

        console.log(bookData)

        // limpiar campos
        e.target.reset();
    }


    return (
        <section className="form">
    
            <div className="form__titulo">
               <p className="form__titulo-detalle">Please complete the form.</p>
            </div>
    
            <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__input-section">
                    <label><h2 className="form__input-title">Title: </h2></label>
                    <input
                      id="title"
                      className="form__input"
                      type="text"
                      placeholder="Max 30 characters"
                      autoComplete="off"
                      {...register('title', {
                          required:{
                              value: true,
                              message:'The title input is required'
                          }, maxLength: {
                              value: 30,
                              message: 'Must be less than 30 characters'
                          }
                      })}
                    />
                </div>
                {errors.title && <span className="form__input-error">{errors.title.message}</span>}

                <div className="form__input-section">
                    <label><h2 className="form__input-gender">Gender: </h2></label>
                    <input
                      id="gender"
                      className="form__input"
                      type="text"
                      placeholder="Max 10 letters"
                      autoComplete="off"
                      {...register('gender', {
                          required:{
                            value: true,
                            message:'The gender input is required'
                          },
                          maxLength: {
                            value: 10,
                            message: 'Must be less than 10 letters'
                          }
                      })}
                    />
                </div>
                {errors.gender && <span className="form__input-error">{errors.gender.message}</span>}

                <div className="form__input-section">
                    <label><h2 className="form__input-year">Year: </h2></label>
                    <input
                      id="year"
                      className="form__input"
                      type="date"
                      placeholder="Max 30 letters"
                      autoComplete="off"
                      {...register('year', {
                          required:{
                            value: true,
                            message:'The year input is required'
                          },
                      })}
                    />
                </div>
                {errors.year && <span className="form__input-error">{errors.year.message}</span>}

                <div className="form__input-section">
                    <label><h2 className="form__input-author">Author: </h2></label>
                    <input
                      id="author"
                      className="form__input"
                      type="text"
                      placeholder="Max 30 letters"
                      autoComplete="off"
                      {...register('author', {
                          required:{
                            value: true,
                            message:'The author input is required'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Must be less than 30 letters'
                          }
                      })}
                    />
                </div>
                {errors.author && <span className="form__input-error">{errors.author.message}</span>}

                <div className="form__textarea-section">
                    <label><h2 className="form__input-synopsis">Synopsis: </h2></label>
                    <textarea
                        className="form__textarea"
                        name="synopsis"
                        id="synopsis"
                        rows="7"
                        placeholder="Please enter a short summary"
                        {...register('synopsis',{
                            required:'The synopsis input is required'
                        })}
                    />
                </div>
                {errors.synopsis && <span className="form__input-error">{errors.synopsis.message}</span>}
                
                <button className="form__btn" id="formBtn">Load up</button>
    
            </form>
    
        </section>
      )
}

export default CreateBook