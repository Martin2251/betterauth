🚀 Simple Better Auth SetupA minimal full-stack authentication boilerplate using React (Vite), Node (Express), and SQLite.📁 Project Structure/server: Express backend + Better Auth + SQLite./client: React frontend + Better Auth Client.🛠 Backend Setup (Server)Install dependencies:Bashcd server
npm install
Initialize the Database:Better Auth needs to create the SQLite tables before the first run.Bashnpx @better-auth/cli migrate
# Path: ./auth.ts
Environment Variables:Create a .env file in /server:Code snippetBETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
TRUSTED_ORIGINS=http://localhost:5173
Run Server:Bashnpx tsx index.ts
💻 Frontend Setup (Client)Install dependencies:Bashcd client
npm install
Run React:Bashnpm run dev
📝 Key Features & RulesDatabase: Managed via better-sqlite3. Tables are stored in server/auth.db.Password Policy: Better Auth defaults to a minimum of 8 characters.Session Management: Handled via secure cookies. Ensure credentials: true is set in the backend CORS config.TypeScript: Use tsx to run the backend without a manual build step.🛠 Useful CommandsCommandPurposenpx @better-auth/cli migrateSync your database tables with your auth config.sqlite3 auth.db ".tables"Verify tables exist (user, session, account).npx tsx index.tsRun the backend with TypeScript support.🔒 Protected RoutesTo protect a route in Express, use the getSession helper:TypeScriptconst session = await auth.api.getSession({ headers: fromNodeHeaders(req.headers) });
if (!session) return res.status(401).send("Unauthorized");
