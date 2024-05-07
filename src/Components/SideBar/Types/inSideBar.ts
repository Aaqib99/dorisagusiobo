import { BoxProps, FlexProps } from "@chakra-ui/react";
// import { LoginData } from "../Main";

export interface LinkItemProps {
  name: string;
  to: string;
}

export interface NavItemProps extends FlexProps {
  to: string;
  children: React.ReactNode;
}

export interface MobileProps extends FlexProps {
}

export interface MobilePropsSigned extends MobileProps {
  logout: () => void;
}
export interface MobilePropsUnsigned extends MobileProps {
  login: () => void;
  register: () => void;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}
