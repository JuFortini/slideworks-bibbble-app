import Link, { LinkProps } from 'next/link';
import { useRouter } from "next/router";
import { Link as ChakraLink, Text } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  children: string,
}

export function NavLink({children, href, ...rest}: NavLinkProps) {

  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === href) {
    isActive = true;
  }

  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ textDecoration: "none" }}>
        {isActive ? (
          <Text fontWeight="bold">{children}</Text>
        ) : (
          <Text>{children}</Text>
        )}
      </ChakraLink>
    </Link>
  );
}