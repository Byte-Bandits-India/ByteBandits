import { z } from "zod";

/**
 * Escapes HTML characters to prevent XSS attacks in email clients and databases
 */
export function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .trim()
    .replace(/[<>]/g, "") // strip HTML tags
    .replace(/javascript:/gi, "") // strip javascript pseudo protocol
    .replace(/onload|onerror|onclick/gi, "") // strip event handlers
    .slice(0, 3000); // enforce hard limit
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(70, "Name must not exceed 70 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address (e.g., name@example.com)")
    .max(100, "Email must not exceed 100 characters"),

  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => {
      if (!val || val === "") return true;
      const digitsOnly = val.replace(/\D/g, "");
      return digitsOnly.length === 10;
    }, "Phone number must be exactly 10 digits"),

  website: z
    .string()
    .trim()
    .optional()
    .refine((val) => {
      if (!val || val === "") return true;
      return /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(val);
    }, "Please enter a valid website URL (e.g., example.com or https://example.com)"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long")
    .max(2500, "Message must not exceed 2500 characters"),

  source: z
    .string()
    .min(1, "Please select how you heard about us"),

  consent: z
    .boolean()
    .refine((val) => val === true, "You must consent to continue"),

  // Honeypot field for bot protection (should always remain empty for real humans)
  _gotcha: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
