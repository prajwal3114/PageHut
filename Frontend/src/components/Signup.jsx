import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }

    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Signup Successfully");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
        } else {
          console.log(err);
          alert("Network Error: " + err.message);
        }
      });
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md relative">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg text-left">Signup</h3>
              <div className='text-left'>
                {/* Name */}
                <div className='mt-4 space-y-2'>
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder='Enter your fullname'
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className='mt-4 space-y-2'>
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder='Enter your email'
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className='mt-4 space-y-2'>
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder='Enter your password'
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Button */}
                <div className='flex justify-around mt-4'>
                  <button
                    type="submit"
                    className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
