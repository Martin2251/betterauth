import { authClient } from "./auth-client";
import { useState } from "react";

export default function App() {
  const { data: session, isPending } = authClient.useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => authClient.signUp.email({ email, password, name: "User" });

  if (isPending) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      {session ? (
        <div>
          <p>Logged in as: {session.user.email}</p>
          <button onClick={() => authClient.signOut()}>Logout</button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up / Login</button>
        </div>
      )}
    </div>
  );
}