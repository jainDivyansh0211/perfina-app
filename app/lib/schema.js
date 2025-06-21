import { Black_And_White_Picture } from "next/font/google";
import {z} from "zod"

export const accountSchema = z.object({
    name:z.string().min(1,"Name is required"),
    type: z.enum(["CURRENT", "SAVINGS"]),
    balance: z.string().min(1,"Initial balance is req"),
    isDefault:z.boolean().default(false),
});