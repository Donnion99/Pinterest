import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

function User() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return (
      <div className="pt-20">
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        <br></br>
        Your nickname is {user.nickname}.
      </div>
    );
  }
  return <a href="/api/auth/login">Login</a>;
}

export default User;
