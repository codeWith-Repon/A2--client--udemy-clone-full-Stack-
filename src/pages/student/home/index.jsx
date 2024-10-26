import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import React, { useContext } from "react";

const StudentHomePage = () => {
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default StudentHomePage;
