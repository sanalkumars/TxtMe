 'use client';

import { useCallback, useState } from "react";
import {  FieldValues,SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN')
    const[isLoading,setIsLoading] = useState(false);

    const toggleVarient = useCallback(() => {
        if (variant==='LOGIN') {
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant]);

    const {
      register,
      handleSubmit,
      formState: {
        errors
      }
    } = useForm<FieldValues>({
      defaultValues:{
        name: '',
        email :'',
        password: ''
      }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
      setIsLoading(true);
      if(variant === 'REGISTER'){
        // axios register
      }
      if(variant === 'LOGIN'){
        // auth signin 
      }
    }

    const socialAction = (action: string) =>{
      setIsLoading(true);
      // nextt auth social signin
    }


  return (
    <div>AuthForm</div>
  )
}

export default AuthForm