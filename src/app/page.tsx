import React from "react";

const MainPage = async () => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 60, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });
  const data = await res.json();

  return <div>MainPage</div>;
};

export default MainPage;
