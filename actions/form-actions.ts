"use server";

import { sendFormSubmissionEmail } from "@/lib/nodemailer";
import { FormSchema } from "@/schemas/schema";
import { FormSchemaType } from "@/types";

export const submitFormAction = async (data: FormSchemaType) => {
  try {
    const { success } = FormSchema.safeParse(data);
    if (!success) {
      return { success: false };
    }

    return await sendFormSubmissionEmail(data);
  } catch (error) {
    return { success: false };
  }
};
