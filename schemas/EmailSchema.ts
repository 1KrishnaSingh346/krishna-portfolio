import { z } from "zod";

export const EmailSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid Email address"),
  service: z.string().min(1, "Service context is required"),
  message: z.string().min(10, "Message description is too short"),
});
