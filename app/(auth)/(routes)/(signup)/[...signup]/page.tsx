"use client";
import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import Link from "next/link";

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name should have at least 2 characters.")
    .max(50, "Name should not exceed 50 characters")
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      "Name should contain only alphabets."),
    email: z.string().email("Email must be valid"),
    password: z.string().min(6, "Password should have at least 6 characters."),
    confirmPassword: z.string().min(6, "Password should have at least 6 characters.")
}).refine((data)=> data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"]
});

const Page = () => {
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          name: "",
          email:"",
          password: "",
          confirmPassword: "",
        },
      })

      function onSubmit(values: z.infer<typeof signUpSchema>){
        console.log(values)
      }

  return (
    <>
        <div className="signUpWrapper">
            <div className="formWrapper">
                {/* Left */}
                <div className="left">
                    <h3>Welcome Back!</h3>
                    <p>To keep connected with us please login with your personal info</p>
                    <Link href={"/signin"}>
                        <Button className="">
                            
                        </Button>
                    </Link>
                </div>

                {/* Right */}
            </div>
        </div>
    </>
  );
};

export default Page;
