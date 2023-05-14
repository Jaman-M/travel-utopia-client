import React, { } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, formState:{errors}, handleSubmit } = useForm();
    // const [data, setData] = useState("");

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='mt-10 flex justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl p-7'>
            <h2 className='text-xl text-center'>Login</h2>

            <form onSubmit={handleSubmit(handleLogin)}>

                

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" {...register("email",{required: "Email is required"})} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' className="input input-bordered w-full max-w-xs" {...register("password",{required:"Password is required",
                    minLength: {value:6, message: "password atlest 6 characters or longer"},
                })} />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                      
                </div>
                <input className='btn btn-accent w-full' type="submit" />
            </form>
            <p className='mt-3'>New to Travel Utopia? <Link to="/signup" className='text-secondary'>Create a new account</Link></p>

            <div className='divider'>OR</div>

            <button className='btn btn-outline my-3 w-full'>CONTINUE WITH GOOGLE</button>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
        </div>
    );
};

export default Login;