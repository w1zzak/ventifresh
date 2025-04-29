// components/Footer.tsx
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {
  FaClock,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  // Colores dinámicos según el modo de color
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const logoColor = useColorModeValue("blue.600", "blue.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const currentYear = new Date().getFullYear();

  return (
    <Box bg={bgColor} color={textColor} pt={16} pb={8}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 1fr 1fr 1fr" }}
          gap={{ base: 12, lg: 8 }}
          mb={12}
        >
          {/* Columna 1: Logo e información */}
          <Stack spacing={6} align={{ base: "center", md: "flex-start" }}>
            <Heading 
              as="h3" 
              fontSize="2xl" 
              fontWeight="bold" 
              color={logoColor}
            >
              EMPRESA INDUSTRIAL
            </Heading>
            
            <Text fontSize="sm" maxW="sm" textAlign={{ base: "center", md: "left" }}>
            Especialistas en sistemas de ventilación y tratamiento de aire. Ofrecemos soluciones personalizadas en montaje de conductos de fibra de vidrio, galvanizado, PVC y helicoidales.
            </Text>
          </Stack>

          {/* Columna 2: Enlaces rápidos */}
          <Stack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Heading 
              as="h3" 
              fontSize="lg" 
              fontWeight="semibold" 
              color={headingColor}
              mb={2}
            >
              Enlaces rápidos
            </Heading>
            
            <Link as={RouterLink} to="/" _hover={{ color: logoColor }}>
              Inicio
            </Link>
            <Link as={RouterLink} to="/servicios" _hover={{ color: logoColor }}>
              Servicios
            </Link>
            <Link as={RouterLink} to="/sobre-nosotros" _hover={{ color: logoColor }}>
              Sobre Nosotros
            </Link>
            <Link as={RouterLink} to="/contacto" _hover={{ color: logoColor }}>
              Contacto
            </Link>
          </Stack>

          {/* Columna 3: Servicios principales */}
          <Stack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Heading 
              as="h3" 
              fontSize="lg" 
              fontWeight="semibold" 
              color={headingColor}
              mb={2}
            >
              Servicios principales
            </Heading>
            
            <Text>
              Ventilación controlada
            </Text>
            <Text>
              Sistemas helicoidales
            </Text>
            <Text>
              Chapas metálicas
            </Text>
            <Text>
              Fabricación de Fibra
            </Text>
          </Stack>

          {/* Columna 4: Información de contacto */}
          <Stack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Heading 
              as="h3" 
              fontSize="lg" 
              fontWeight="semibold" 
              color={headingColor}
              mb={2}
            >
              Contacto
            </Heading>
                        
            <HStack spacing={3}>
              <Icon as={FaPhoneAlt} color={logoColor} />
              <Text>
                643 01 96 46
              </Text>
            </HStack>

            <HStack spacing={3}>
              <Icon as={FaPhoneAlt} color={logoColor} />
              <Text>
                643 59 64 62
              </Text>
            </HStack>
            
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color={logoColor} />
              <Text>
              Ventifresh25@gmail.com
              </Text>
            </HStack>
            
            <HStack spacing={3} align="flex-start">
              <Icon as={FaClock} color={logoColor} mt={1} />
              <Text fontSize="sm">
                Asistencia técnica 24/7 para clientes
              </Text>
            </HStack>
          </Stack>
        </Grid>

        {/* Botón de contacto en versión móvil */}
        <Box 
          display={{ base: "flex", md: "none" }} 
          justifyContent="center" 
          mb={8}
        >
          <Button
            as={RouterLink}
            to="/contacto"
            colorScheme="blue"
            size="lg"
            rounded="lg"
            width="full"
            maxW="sm"
          >
            Contáctanos
          </Button>
        </Box>

        <Divider borderColor={borderColor} mb={8} />

        {/* Pie de página - Copyright y política */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align="center"
          textAlign={{ base: "center", md: "left" }}
          fontSize="sm"
        >
          <Text>
            © {currentYear} Venti-Fresh. Todos los derechos reservados.
          </Text>
          <HStack 
            spacing={4} 
            mt={{ base: 4, md: 0 }}
            justify={{ base: "center", md: "flex-end" }}
          >
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}