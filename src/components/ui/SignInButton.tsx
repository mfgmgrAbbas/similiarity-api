"use client"
import { FC, useState } from 'react'
import Button from './Button'
import { signIn } from 'next-auth/react'
import { toast } from '../Toast'


interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signInWithGoogle= async ()=> {
        setIsLoading(true)
        try {
            await signIn('google')
        } catch (error) {
            toast ({
                title: 'Error in signing in',
                message: 'Please try agin later',
                type: 'error',
            })
        }
    }
  return <Button onClick={signInWithGoogle} isLoading = {isLoading}>
    Sign in
  </Button>
}

export default SignInButton