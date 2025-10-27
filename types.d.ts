import z from "zod";
import { FormSchema } from "./schemas/schema";

type FormSchemaType = z.infer<typeof FormSchema>;
