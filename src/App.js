import React from "react";
import {useForm} from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' class='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              name='name'
              placeholder='Full Name'
              {...register("name", {
                required: true,
                minLength: 4,
              })}
            />
            <span className='form-text text-danger'>
              {errors.name?.type === "required" && "First name is required"}
            </span>
            <span className='form-text text-danger'>
              {errors.name?.type === "minLength" &&
                "Minimum character should be 4"}
            </span>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
