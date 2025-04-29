// src/pages/Contacto.tsx
import {
  Box,
  Heading,
  Text,
  Container,
  useColorModeValue,
  Icon,
  Flex,
  Grid,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

// Componentes con motion para animaciones
const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function Contacto() {
  const bgBlue = useColorModeValue("blue.600", "blue.700");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const textLight = useColorModeValue("gray.100", "gray.100");
  const cardBg = useColorModeValue("white", "gray.800");

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }
  };

  return (
    <Box 
      py={{ base: 8, md: 16 }} // Reducido padding vertical para móviles
      px={{ base: 3, md: 6 }} // Reducido padding horizontal para móviles
      bg={useColorModeValue("gray.50", "gray.900")}
      id="contacto"
      width="100%" // Asegura que ocupe todo el ancho disponible
    >
      <Container maxW="container.xl" px={{ base: 2, md: 4 }}> {/* Ajustado padding */}
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          width="100%" // Asegura que ocupe todo el ancho
        >
          <Grid 
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }} 
            gap={{ base: 6, md: 10 }} // Reducido gap para móviles
            bg={cardBg}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            width="100%" // Asegura que ocupe todo el ancho
          >
            {/* Información de contacto - Panel izquierdo */}
            <MotionBox 
              variants={itemVariants}
              bg={bgBlue} 
              p={{ base: 4, sm: 6, md: 10 }} // Reducido padding para móviles
              color="white"
              position="relative"
              overflow="hidden"
              width="100%" // Asegura que ocupe todo el ancho en móvil
            >
              {/* Patrón decorativo de fondo */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.1"
                bgImage="url('/assets/blueprint-pattern.png')"
                backgroundSize="cover"
                zIndex="0"
              />
              
              <Box position="relative" zIndex="1">
                <Heading 
                  fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} // Reducido tamaño para móviles
                  mb={{ base: 3, md: 8 }} // Reducido margin para móviles
                  fontWeight="bold"
                  lineHeight="1.2"
                >
                  Soluciones industriales
                  <Text 
                    as="span" 
                    display="block" 
                    fontWeight="extrabold"
                  >
                    precisas y rápidas
                  </Text>
                </Heading>
                
                <Text 
                  fontSize={{ base: "sm", md: "lg" }} // Reducido tamaño para móviles
                  mb={{ base: 5, md: 10 }} // Reducido margin para móviles
                  color={textLight} 
                  opacity="0.9"
                >
                  Nuestro equipo de especialistas está listo para ayudarte con proyectos relacionados con ventilación y tratamiento de aire. Ofrecemos servicios como el montaje de conductos de fibra de vidrio, galvanizados, PVC y helicoidales, adaptados a tus necesidades y garantizando siempre la mejor calidad en cada solución.
                </Text>
                
                <Heading 
                  fontSize={{ base: "lg", md: "2xl" }} // Reducido tamaño para móviles
                  mb={{ base: 3, md: 7 }} // Reducido margin para móviles
                  fontWeight="semibold"
                >
                  Información de contacto
                </Heading>
                
                <VStack spacing={{ base: 3, md: 6 }} align="stretch"> {/* Reducido spacing para móvil */}   
                  <HStack spacing={3} align="center"> {/* Reducido spacing */}
                    <Flex 
                      align="center" 
                      justify="center" 
                      bg="rgba(255,255,255,0.2)" 
                      w={{ base: "32px", md: "40px" }} // Más pequeño en móviles
                      h={{ base: "32px", md: "40px" }}
                      borderRadius="md"
                      flexShrink={0}
                    >
                      <Icon as={FaEnvelope} boxSize={{ base: 3, md: 5 }} /> {/* Más pequeño en móviles */}
                    </Flex>
                    <Text 
                      fontSize={{ base: "sm", md: "lg" }} // Reducido tamaño para móviles
                      wordBreak="break-word"
                      maxW="100%" // Asegura que el texto se ajuste
                    >
                      Ventifresh25@gmail.com
                    </Text>
                  </HStack>

                  <HStack spacing={3} align="center">
                    <Flex 
                      align="center" 
                      justify="center" 
                      bg="rgba(255,255,255,0.2)" 
                      w={{ base: "32px", md: "40px" }}
                      h={{ base: "32px", md: "40px" }}
                      borderRadius="md"
                      flexShrink={0}
                    >
                      <Icon as={FaPhone} boxSize={{ base: 3, md: 5 }} />
                    </Flex>
                    <Text fontSize={{ base: "sm", md: "lg" }}>
                      643 01 96 46
                    </Text>
                  </HStack>

                  <HStack spacing={3} align="center">
                    <Flex 
                      align="center" 
                      justify="center" 
                      bg="rgba(255,255,255,0.2)" 
                      w={{ base: "32px", md: "40px" }}
                      h={{ base: "32px", md: "40px" }}
                      borderRadius="md"
                      flexShrink={0}
                    >
                      <Icon as={FaPhone} boxSize={{ base: 3, md: 5 }} />
                    </Flex>
                    <Text fontSize={{ base: "sm", md: "lg" }}>
                      643 59 64 62
                    </Text>
                  </HStack>
                  
                  <HStack spacing={3} align="center">
                    <Flex 
                      align="center" 
                      justify="center" 
                      bg="rgba(255,255,255,0.2)" 
                      w={{ base: "32px", md: "40px" }}
                      h={{ base: "32px", md: "40px" }}
                      borderRadius="md"
                      flexShrink={0}
                    >
                      <Icon as={FaClock} boxSize={{ base: 3, md: 5 }} />
                    </Flex>
                    <Text 
                      fontSize={{ base: "sm", md: "lg" }}
                      maxW="100%" // Asegura que el texto se ajuste
                    >
                      Asistencia técnica 24/7 para clientes
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>

            {/* Métodos de contacto - Panel derecho */}
            <MotionBox 
              variants={itemVariants} 
              p={{ base: 4, sm: 6, md: 10 }} // Reducido padding para móviles
              width="100%" // Asegura que ocupe todo el ancho en móvil
            >
              <Heading 
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} // Reducido tamaño para móviles
                mb={{ base: 3, md: 6 }} // Reducido margin para móviles
                color={bgBlue}
                lineHeight="1.2"
                fontWeight="bold"
              >
                Contacto inmediato
              </Heading>
              
              <Text 
                fontSize={{ base: "sm", md: "lg" }} // Reducido tamaño para móviles
                mb={{ base: 5, md: 9 }} // Reducido margin para móviles
                color={textColor}
              >
                ¿Necesita un presupuesto urgente o tiene consultas técnicas sobre ventilación, tratamiento de aire o montaje de conductos? Nuestro equipo está listo para ofrecerle soluciones a medida.
              </Text>
              
              <Heading 
                fontSize={{ base: "md", md: "xl" }} // Reducido tamaño para móviles
                mb={{ base: 3, md: 7 }} // Reducido margin para móviles
                fontWeight="semibold"
                color={textColor}
              >
                Seleccione el método de contacto que prefiera:
              </Heading>
              
              <VStack spacing={{ base: 3, md: 5 }} align="stretch"> {/* Reducido spacing para móvil */}
                <MotionButton
                  as="a"
                  leftIcon={<Icon as={FaPhone} boxSize={{ base: 4, md: 5 }} />} // Más pequeño en móviles
                  bg={bgBlue}
                  color="white"
                  size={{ base: "md", md: "lg" }} // Más pequeño en móviles
                  height={{ base: "auto", md: "60px" }}
                  py={{ base: 3, md: 5 }} // Reducido padding vertical
                  px={{ base: 3, md: 5 }} // Reducido padding horizontal
                  borderRadius="lg"
                  justifyContent="flex-start"
                  _hover={{ bg: "blue.700" }}
                  boxShadow="md"
                  variants={buttonVariants}
                  whileHover="hover"
                  width="100%" // Asegura que ocupe todo el ancho
                >
                  <Flex width="100%" justify="space-between" align="center" flexWrap={{ base: "wrap", sm: "nowrap" }}>
                    <Text fontWeight="semibold" fontSize={{ base: "xs", md: "md" }}>Llamada directa</Text>
                    <Text fontWeight="bold" fontSize={{ base: "xs", md: "md" }}>643 59 64 62</Text>
                  </Flex>
                </MotionButton>
                
                <Button
                  as="a"
                  href="https://wa.me/34643596462"
                  target="_blank"
                  leftIcon={<Icon as={FaWhatsapp} boxSize={{ base: 4, md: 5 }} />}
                  bg="green.500"  
                  color="white"
                  size={{ base: "md", md: "lg" }}
                  height={{ base: "auto", md: "60px" }}
                  py={{ base: 3, md: 5 }}
                  px={{ base: 3, md: 5 }}
                  borderRadius="lg"
                  justifyContent="flex-start"
                  _hover={{ bg: "green.600" }}
                  boxShadow="md"
                  width="100%"
                >
                  <Flex width="100%" justify="space-between" align="center">
                    <Text fontWeight="semibold" fontSize={{ base: "xs", md: "md" }}>WhatsApp</Text>
                    <Text fontWeight="bold" fontSize={{ base: "xs", md: "md" }}>Respuesta rápida</Text>
                  </Flex>
                </Button>     
                
                <MotionButton
                  as="a"
                  leftIcon={<Icon as={FaEnvelope} boxSize={{ base: 4, md: 5 }} />}
                  bg="gray.700"
                  color="white"
                  size={{ base: "md", md: "lg" }}
                  height={{ base: "auto", md: "60px" }}
                  py={{ base: 3, md: 5 }}
                  px={{ base: 3, md: 5 }}
                  borderRadius="lg"
                  justifyContent="flex-start"
                  _hover={{ bg: "gray.800" }}
                  boxShadow="md"
                  variants={buttonVariants}
                  whileHover="hover"
                  width="100%"
                >
                  <Flex 
                    width="100%" 
                    justify="space-between" 
                    align="center" 
                    flexDirection={{ base: "column", sm: "row" }} 
                    alignItems={{ base: "flex-start", sm: "center" }}
                  >
                    <Text fontWeight="semibold" mb={{ base: 1, sm: 0 }} fontSize={{ base: "xs", md: "md" }}>Email</Text>
                    <Text 
                      fontWeight="bold" 
                      fontSize={{ base: "xs", md: "md" }} 
                      wordBreak="break-word"
                      textAlign={{ base: "left", sm: "right" }}
                    >
                      Ventifresh25@gmail.com
                    </Text>
                  </Flex>
                </MotionButton>
              </VStack>
              
              <Text 
                mt={{ base: 4, md: 8 }} // Reducido margin para móviles
                fontSize={{ base: "xs", md: "sm" }} 
                color="gray.500"
              >
                Ofrecemos consultas técnicas especializadas y presupuestos sin compromiso para 
                proyectos de fabricación en fibra, helicoidal y componentes industriales.
              </Text>
            </MotionBox>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}