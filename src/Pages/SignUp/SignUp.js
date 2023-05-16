import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.log(error));
    }

    return (
        <div className='mt-10 flex justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>

            <form onSubmit={handleSubmit(handleSignUp)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' {...register("name",{
                        required: "Name is required"
                    })} className="input input-bordered w-full max-w-xs"  />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' {...register("email", {
                        required: "Email is required",
                        minLength: {value: 6, message: "Password must be 6 caracter long"}
                    })} className="input input-bordered w-full max-w-xs"  />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' {...register("password",{
                        required: "Password is required"
                    })} className="input input-bordered w-full max-w-xs"  />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                      
                </div>
                <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
            </form>
            <p className='mt-3'>Already have an account? <Link to="/login" className='text-secondary'>Please Login</Link></p>

            <div className='divider'>OR</div>

            <button className='btn btn-outline my-3 w-full'>CONTINUE WITH GOOGLE</button>
            {/* <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
        </div>
        </div>
    );
};

export default SignUp;