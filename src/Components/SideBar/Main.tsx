import { Box } from "@chakra-ui/react";
// import SidebarContent from "./SideBar/SidebarContent";
import { TopbarUnsigned } from "./SideBar/Topbar";
import { useKeycloak } from "@react-keycloak/web";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export interface LoginData {
  email: string | undefined;
  emailVerified: boolean | undefined;
  firstName: string | undefined;
  id: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
}

function SideBar({ Router }: { Router: JSX.Element }) {
  const redirs = useRef(true)
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();
  function login() { keycloak.login({ redirectUri: window.location.origin }) }
  function register() { keycloak.register() }

  if (initialized && keycloak.authenticated) {
    if (redirs.current) { navigate('/private-page'); redirs.current = false }
    keycloak
      .loadUserProfile()
      .catch((error) => { console.error('Error loading user profile:', error); });
  }
  return (
    <Box minH="100vh">

      <TopbarUnsigned
        login={login}
        register={register}
      ></TopbarUnsigned>

      {keycloak.authenticated ? (
        <Box ml={{ base: 0, md: 0 }} p="0">
          {" "}
          {Router}{" "}
        </Box>
      ) : (
        <Box ml={{ base: 0, md: 0 }} p="0">
          {" "}
          {Router}{" "}
        </Box>
      )}
    </Box>
  );
}

export default SideBar;
