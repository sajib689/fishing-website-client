"use client"

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Twitter, Facebook, Apple, Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import AuthWrapper from './AuthWrapper'

interface FormErrors {
    email?: string
    password?: string
}

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!password) {
            newErrors.password = 'Password is required'
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Form submitted', { email, password })
            // Add your form submission logic here
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <AuthWrapper>


            <div className="w-full max-w-md mb-8 text-center">
                <Image className='mx-auto' src='/logo/nav-logo-light.png' width={200} height={70} alt='logo' />
                <h1 className="text-4xl text-white mt-3 font-bold text-center mb-2">Register a new account</h1>
                <p className="text-center text-white mb-6 text-[18px]">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#FF9500] hover:text-[#FF9500] font-medium">
                        Log in
                    </Link>
                </p>
            </div>

            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">


                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Create a password"
                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#FF9500] cursor-pointer hover:bg-[#FF9500] text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                        Sign up
                    </button>
                </form>

                <div className="my-6 relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-sm text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <button
                        type="button"
                        className="flex bg-[#171717] items-center justify-center p-3 cursor-pointer border border-gray-300 rounded-md hover:bg-[#171717] text-white transition-colors"
                    >
                        <Twitter className="text-white" size={18} />
                    </button>
                    <button
                        type="button"
                        className="flex bg-[#171717] items-center justify-center p-3 cursor-pointer border border-gray-300 rounded-md hover:bg-[#171717] text-white transition-colors"
                    >
                        <Facebook className="text-white" size={18} />
                    </button>
                    <button
                        type="button"
                        className="flex bg-[#171717] items-center justify-center p-3 cursor-pointer border border-gray-300 rounded-md hover:bg-[#171717] text-white transition-colors"
                    >
                        <Apple className="text-white" size={18} />
                    </button>
                </div>
            </div>

        </AuthWrapper>
    )
}

export default Register