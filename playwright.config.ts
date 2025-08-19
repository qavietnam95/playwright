import { defineConfig } from '@playwright/test';
import path from 'path';

require('dotenv').config();

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html']],
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Run tests in files in parallel */
  fullyParallel: true,



  projects: [
    // this matches all tests ending with .setup.ts
    {
      name: 'setup',
      testMatch: '**/*.spec.ts',
    }
  ],
});
