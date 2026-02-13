import express from "express";
import cors from "cors";
import { toNodeHandler, fromNodeHeaders } from "better-auth/node";
import { auth } from "./auth";

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // React's default port
    credentials: true
}));

// Route for Better Auth logic
app.all("/api/auth/*path", toNodeHandler(auth));

// A "Protected" route example
app.get("/api/me", async (req, res) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers)
    });
    
    if (!session) return res.status(401).send("Unauthorized");
    res.json(session.user);
});

app.listen(3000, () => console.log("Backend on port 3000"));