import { HStack } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import { SocialIcon } from "./SocialIcon";

export function SocialNetworks() {
  return (
    <HStack spacing="2rem">
      <SocialIcon icon={<RiFacebookFill />} label="Facebook" />
      <SocialIcon icon={<RiTwitterFill />} label="Twitter" />
      <SocialIcon icon={<RiInstagramFill />} label="Instagram" />
    </HStack>
  );
}