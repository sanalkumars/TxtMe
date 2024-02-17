 'use client';

import { useCallback, useState } from "react";

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
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm