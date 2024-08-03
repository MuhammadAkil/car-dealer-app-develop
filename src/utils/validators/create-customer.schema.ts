import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const createCustomerSchema = z.object({
    firstName: z.string().min(1, { message: messages.firstName }),
    lastName: z.string().min(1, { message: messages.lastName }),
    fullName: z.string().min(1, { message: messages.fullName }),
    Name: z.string().min(1, { message: messages.Name }),
    userName: z.string().min(1, { message: messages.userName }),
    Mobile: z.string().min(1, { message: messages.Mobile }),
    Phone: z.string().min(1, { message: messages.Phone }),
    Company: z.string().min(1, { message: messages.Company }),
    Gender: z.string().min(1, { message: messages.Gender }),
    birthDate: z.string().min(1, { message: messages.birthDate }),
    Email: z.string().min(1, { message: messages.Email }),
    Address: z.string().min(1, { message: messages.Address }),
    aptNumber: z.string().min(1, { message: messages.aptNumber }),
    postalCode: z.string().min(1, { message: messages.postalCode }),
    City: z.string().min(1, { message: messages.City }),
    Country: z.string().min(1, { message: messages.Country }),
    State: z.string().min(1, { message: messages.State }),
    licenseNumber: z.string().min(1, { message: messages.licenseNumber }),
    licenseExpiryDate: z.string().min(1, { message: messages.licenseExpiryDate }),
});

// generate form types from zod validation schema
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
