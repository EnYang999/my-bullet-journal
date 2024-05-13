// src/utils/validate.ts
interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email)
    ? { isValid: true, message: "Valid email address." }
    : { isValid: false, message: "Invalid email address." };
};

export const validateUsername = (username: string): ValidationResult => {
  // Example: Username should be 4-20 characters long
  return username.length >= 4 && username.length <= 20
    ? { isValid: true, message: "Valid username." }
    : { isValid: false, message: "Username must be 4-20 characters long." };
};

export const validatePassword = (password: string): ValidationResult => {
  // Example: Password should be at least 6 characters
  return password.length >= 6
    ? { isValid: true, message: "Valid password." }
    : { isValid: false, message: "Password must be at least 6 characters long." };
};