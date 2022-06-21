import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";

interface SocialIconProps {
  label: string,
  icon: ReactElement,
}

export function SocialIcon({ label, icon }: SocialIconProps) {
  return (
    <IconButton 
      aria-label={label}
      icon={icon}
      color="gray.50"
      fontSize="2xl"
      bg="inherit"
      _hover={{
        bg:"inherit"
      }}
    />
  );
}