import zod, { z } from "zod"

export const SignupSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z.string().min(3, "Password must be at least 6 characters long"),
});

export const SigninSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});

export const TagSchema = z.object({
  title: z.string().min(1, "Tag title is required"),
});