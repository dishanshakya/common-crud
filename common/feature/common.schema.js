import { z } from "zod";
import { createInsertSchema, createUpdateSchema} from "drizzle-zod"

export const commonCreateSchema = (table) => createInsertSchema(table).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const commonUpdateSchema = (table) => createUpdateSchema(table).omit({
  id: true,
  createdAt: true,
})
