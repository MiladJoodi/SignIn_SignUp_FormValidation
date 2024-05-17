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

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name Should have at least 2 characters.")
    .max(50, "Name should not exceed 50 characters")
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      "Name should contain only alphabets."
    ),
});

const Page = () => {
  return <div>page</div>;
};

export default Page;
