import { z } from 'zod'

export const QuizBase = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  public: z.boolean().optional(),
})
