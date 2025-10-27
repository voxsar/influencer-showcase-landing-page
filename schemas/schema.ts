import z from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z
    .email("Invalid email address")
    .max(100, "Email must be at most 100 characters"),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(700, "Message must be at most 500 characters"),
});
