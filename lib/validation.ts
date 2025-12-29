export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
}

export interface ValidationRules {
  [key: string]: ValidationRule
}

export interface ValidationErrors {
  [key: string]: string
}

export function validateForm(data: any, rules: ValidationRules): ValidationErrors {
  const errors: ValidationErrors = {}

  Object.keys(rules).forEach((field) => {
    const rule = rules[field]
    const value = data[field]

    // Required validation
    if (rule.required && (!value || (typeof value === "string" && value.trim() === ""))) {
      errors[field] = "This field is required"
      return
    }

    // Skip other validations if field is empty and not required
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return
    }

    // Min length validation
    if (rule.minLength && typeof value === "string" && value.length < rule.minLength) {
      errors[field] = `Minimum ${rule.minLength} characters required`
      return
    }

    // Max length validation
    if (rule.maxLength && typeof value === "string" && value.length > rule.maxLength) {
      errors[field] = `Maximum ${rule.maxLength} characters allowed`
      return
    }

    // Pattern validation
    if (rule.pattern && typeof value === "string" && !rule.pattern.test(value)) {
      errors[field] = "Invalid format"
      return
    }

    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(value)
      if (customError) {
        errors[field] = customError
        return
      }
    }
  })

  return errors
}

export const commonValidationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: true,
    pattern: /^(\+251|0)[0-9]{9}$/,
  },
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
}
