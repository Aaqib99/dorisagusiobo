import { Flex } from "@chakra-ui/react";
import { NavItemProps } from "../Types/inSideBar";
import { Link } from "react-router-dom";

const NavItem = ({ to, children, ...rest }: NavItemProps) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        justify="center"  // Center content horizontally
        p={{ base: 2, md: 4 }}  // Adjust padding for different screen sizes
        my={{ base: 2, md: 0 }}  // Adjust margin for different screen sizes
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={"white"}
        _hover={{ bg: "rgb(25, 118, 210)", color: "white" }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
