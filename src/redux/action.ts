// This file defines the actions that describe what you want to do in your application.

// increment and decrement: Define the structure of the actions.

export const increment = () => ({
  type: "INCREMENT" as const,
});

export const decrement = () => ({
  type: "DECREMENT" as const,
});

export const reset = () => ({
  type: "RESET" as const,
});
