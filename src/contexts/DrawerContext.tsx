import { createContext, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useContext } from "react";

interface DrawerProviderProps {
  children: ReactNode,
}

type DrawerContextProps = UseDisclosureReturn;

const DrawerContext = createContext({} as DrawerContextProps);

export function DrawerProvider({ children }: DrawerProviderProps) {

  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath]);

  return (
    <DrawerContext.Provider value={disclosure}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawerContext = () => useContext(DrawerContext);