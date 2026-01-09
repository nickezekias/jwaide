import { z } from 'zod'

export const PublicationSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'required'),
  reference: z.string().min(1),
  type: z.enum(['book', 'magazine', 'brochure', 'tract']),
  quantityWarehouse: z.number().min(0).default(0),
  quantityOnDisplay: z.number().min(0).default(0),
  container: z.string().optional(),
  congregationId: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
})

export type Publication = z.infer<typeof PublicationSchema>
