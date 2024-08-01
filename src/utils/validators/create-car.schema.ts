import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const createCarSchema = z.object({
  Age: z.string().min(1, { message: messages.Age }),
  Photo: z.string().min(1, { message: messages.Photo }),
  Year: z.string().min(1, { message: messages.Year }),
  stockNumber: z.string().min(1, { message: messages.stockNumber }),
  purchasePrice: z.string().min(1, { message: messages.purchasePrice }),
  VinNumber: z.string().min(1, { message: messages.VinNumber }),
  Odometer: z.string().min(1, { message: messages.Odometer }),
  CurrentStatus: z.string().min(1, { message: messages.CurrentStatus }),
});

// generate form types from zod validation schema
export type CreateCarInput = z.infer<typeof createCarSchema>;
