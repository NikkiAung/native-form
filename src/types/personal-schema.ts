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
    postalcode: z
        .string({ required_error: "Postal code is required" })
        .min(1, { message: "Postal code is required" }),
    // country: z.string({ required_error: "Country is required" }),
    phonenumber: z
        .string({ required_error: "Please enter a vaild phone number" })
        .length(10, { message: "Phone number is required" }),
    dateOfBirth: z.date({ required_error: "Date of birth is required" }),
});

export type Personal = z.infer<typeof PersonalSchema>;