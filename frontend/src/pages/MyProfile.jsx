import React from "react";
import { useUserContext } from "../contexts/UserContext";

function MyProfile() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>Bienvenue {user.username}</h1>
    </div>
  );
}

export default MyProfile;
