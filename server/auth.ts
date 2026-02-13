import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

const sqlite = new Database("auth.db");

export const auth = betterAuth({
    database: sqlite,
    baseURL: "http://localhost:3000",
    // Add this to allow your React app:
    trustedOrigins: ["http://localhost:5173"],
    emailAndPassword: { enabled: true },
    minPasswordLength: 4
});