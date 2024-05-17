import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: 'Sign up | Demo',
    description: 'Joodi.me'
}

const SignUpLayout = ({children} : {children: React.ReactNode}) =>{
    return(
        <>
            <NextTopLoader color="#000" showSpinner={false} />
            {children}
        </>
    )
}

export default SignUpLayout;