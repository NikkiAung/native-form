import * as z from "zod";
 
export const PersonalSchema = z.object({
    fullname: z
        .string({ required_error: "Fullname is required" })
        .min(3, { message: "Fullname must be at least 3 characters long" }),
    address: z
        .string({ required_error: "Address is required" })
        .min(3, { message: "Address must be at least 3 characters long" }),
    city: z
        .string({ required_error: "City is required" })
        .min(1, { message: "City is required" }),
    postalcode: z.coerce
        .number({ required_error: "Postal code is required" })
        .min(1, { message: "Postal code is required" }),
    phonenumber: z.coerce
        .number({ message: "Please enter a valid phone number" })
        .min(1, { message: "Phone number is required" }),
});

export type Personal = z.infer<typeof PersonalSchema>;