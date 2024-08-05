import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10_000, // Waktu timeout dalam milidetik (misalnya 10 detik)
    responseTimeout: 15_000, // Timeout untuk menunggu respons dari server
    pageLoadTimeout: 60_000, // Timeout untuk menunggu halaman dimuat
    requestTimeout:10_000
  },
});
