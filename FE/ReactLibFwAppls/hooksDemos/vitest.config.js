import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Critical: Hooks need a DOM to hook into!
    globals: true,        // Allows using 'test' and 'expect' without importing them
  },
});