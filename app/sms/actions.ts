"use server";

import validator from "validator";
import { z } from "zod";

const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

const tokenSchema = z.coerce.number().min(100000).max(999999);

// const smsLogIn = async () => {} // 표현식 방법 (아래 선언식 방법과 같은 의미이다.)
export async function smsLogIn(prevState: any, formData: FormData) {
  console.log(typeof formData.get("token"));
  console.log(typeof tokenSchema.parse(formData.get("token")));
}
