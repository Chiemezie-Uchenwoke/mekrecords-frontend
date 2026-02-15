import { motion } from "motion/react";
import { useForm } from 'react-hook-form';
import { type LoginRequest } from '@/types/user.types';
import { type ApiError } from '@/types/api.types';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authService } from '@/services/authService';
import { useAuthStore } from '@/store/authStore';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>();
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async (data: LoginRequest) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await authService.login(data);
            login(response.user);
            navigate('/dashboard');
        } catch(err) {
            console.error(err);
            const axiosError = err as ApiError;
            setError(axiosError.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className="w-full h-screen flex bg-gray-50 overflow-y-auto">
        <div className="w-full h-full px-10 py-12 max-w-140 mx-auto flex flex-col justify-center gap-8 overflow-y-auto">
            <div className="flex flex-col gap-1">
                <motion.h1 
                    className="font-bold capitalize text-2xl lg:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} 
                    whileHover={{ scale: 1.05, y: -5 }}
                >
                    Welcome to MekRecords
                </motion.h1>

                <motion.p 
                    className="text-sm lg:text-base text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    A sales & inventory management system for Smart Concepts Ltd
                </motion.p>

                {error && (
                <div className="bg-error-500 text-white p-3 rounded-lg text-sm">
                    {error}
                </div>
                )}
            </div>

            <form 
                className="flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium">
                        Email
                    </label>

                    <input 
                        type="text" 
                        id="email" 
                        placeholder="john@example.com" 
                        className="border border-black/20 h-12 rounded-lg text-sm px-2 outline-0 focus:border-primary-600 placeholder:text-gray-400"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                            }
                        })}
                    />

                    {errors.email && (
                        <p className="text-error-500 text-sm ">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-medium">
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter Password" 
                        className="border border-black/20 h-12 rounded-lg text-sm px-2 outline-0 focus:border-primary-600 placeholder:text-gray-400"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                            }
                        })}
                    />

                    {errors.password && (
                        <p className="text-error-500 text-sm">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button 
                    type="submit"
                    className="bg-primary-600 text-gray-50 py-3 rounded-3xl text-lg font-semibold my-3 active:translate-y-1 active:brightness-95 shadow-lg cursor-pointer hover:brightness-95 duration-300"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    </div>
  )
}