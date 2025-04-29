import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Button, Text, Image, Container, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.png"; // Asegúrate de tener un logo en esta ruta

// Componente de Motion para animaciones
const MotionBox = motion(Box);

const Links = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Sobre Nosotros", to: "/sobre-nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Colores dinámicos para tema claro/oscuro
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("blue.50", "blue.900");
  const accentColor = "blue.500";

  return (
    <Box
      bg={bgColor}
      px={{ base: 4, md: 6 }}
      py={3}
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="sm"
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between" h={20}>
          <Flex align="center">
            <MotionBox
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Flex align="center">
                <Image 
                  src={logo}
                  alt="VENTI-FRESH Logo"
                  boxSize="40px"
                  mr={3}
                />
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  bgGradient="linear(to-r, blue.400, blue.600)"
                  bgClip="text"
                  letterSpacing="tight"
                >
                  VENTI-FRESH
                </Text>
              </Flex>
            </MotionBox>
          </Flex>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color={textColor}
            _hover={{ bg: hoverBg }}
          />

          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Button
                as={RouterLink}
                to={link.to}
                key={link.to}
                variant="ghost"
                fontWeight="medium"
                color={textColor}
                px={4}
                rounded="md"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "1px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: accentColor,
                  transition: "all 0.3s ease",
                }}
                _hover={{
                  bg: hoverBg,
                  color: accentColor,
                  _after: {
                    width: "60%",
                  },
                }}
                transition="all 0.3s ease"
              >
                {link.label}
              </Button>
            ))}
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={2} mt={2}>
              {Links.map((link) => (
                <Button
                  as={RouterLink}
                  to={link.to}
                  key={link.to}
                  w="full"
                  variant="ghost"
                  justifyContent="flex-start"
                  fontWeight="medium"
                  color={textColor}
                  py={2}
                  _hover={{ bg: hoverBg, color: accentColor }}
                  onClick={onClose}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}