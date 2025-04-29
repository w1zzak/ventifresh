// components/ContactoInmediato.tsx
import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Icon,
  Button,
  useColorModeValue,
  Container,
  Grid,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock 
} from "react-icons/fa";
import { motion } from "framer-motion";

// Componentes de motion personalizados para animaciones
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const ContactoInmediato = () => {
  // Colores dinámicos según el modo de color
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, gray.50, blue.50)",
    "linear(to-br, gray.900, blue.900, gray.800)"
  );
  
  const cardBg = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.600", "blue.400");
  const textColor = useColorModeValue("gray.700", "gray.200");

  // Animaciones para los elementos
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
      py={{ base: 8, md: 20 }} // Reducido el padding vertical en móviles
      px={{ base: 3, md: 6 }} // Reducido el padding horizontal en móviles
      bg={bgGradient}
      position="relative"
      overflow="hidden"
      id="contacto-inmediato"
      width="100%" // Asegura que el componente ocupe todo el ancho disponible
    >
      {/* Elementos decorativos de fondo */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="url('/assets/pattern-grid.svg')"
        opacity="0.05"
        zIndex="0"
      />
      
      <Container maxW="container.xl" position="relative" zIndex="1" px={{ base: 2, md: 4 }}> {/* Ajustado padding */}
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          bg={cardBg}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="xl"
          width="100%" // Asegura que ocupe todo el ancho del contenedor
        >
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            {/* Sección de información */}
            <Box
              bg={accentColor}
              p={{ base: 4, sm: 6, md: 10 }} // Reducido el padding en móviles
              color="white"
              position="relative"
              overflow="hidden"
              width="100%" // Asegura que ocupe todo el ancho en móvil
            >
              {/* Patrón decorativo */}
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
              
              <Stack spacing={{ base: 4, md: 8 }} position="relative" zIndex="1">
                <MotionBox variants={itemVariants}>
                  <Heading 
                    as="h2" 
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} // Ajuste del tamaño para móviles
                    fontWeight="bold"
                    lineHeight="1.2"
                    mb={{ base: 2, md: 4 }}
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
                    fontSize={{ base: "sm", sm: "md", md: "lg" }} // Reducido tamaño para móviles
                    opacity="0.9" 
                    mb={{ base: 3, md: 6 }}
                  >
                    Nuestro equipo de especialistas está listo para ayudarte con proyectos relacionados con ventilación y tratamiento de aire. Ofrecemos servicios como el montaje de conductos de fibra de vidrio, galvanizados, PVC y helicoidales, adaptados a tus necesidades y garantizando siempre la mejor calidad en cada solución.
                  </Text>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Heading 
                    as="h3" 
                    fontSize={{ base: "lg", md: "xl" }} 
                    mb={{ base: 3, md: 6 }}
                  >
                    Información de contacto
                  </Heading>
                  
                  <Stack spacing={{ base: 3, md: 5 }}> {/* Reducido el espaciado en móviles */}                    
                    <HStack spacing={3} align="center"> {/* Reducido el espaciado */}
                      <Flex 
                        align="center" 
                        justify="center" 
                        bg="rgba(255,255,255,0.2)" 
                        w={{ base: "32px", md: "40px" }} // Más pequeño en móviles
                        h={{ base: "32px", md: "40px" }}
                        borderRadius="md"
                        flexShrink={0}
                      >
                        <Icon as={FaEnvelope} boxSize={{ base: 3, md: 5 }} />
                      </Flex>
                      <Text 
                        fontSize={{ base: "sm", md: "md" }} 
                        wordBreak="break-word"
                        maxW="100%"
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
                        <Icon as={FaPhoneAlt} boxSize={{ base: 3, md: 5 }} />
                      </Flex>
                      <Text fontSize={{ base: "sm", md: "md" }}>
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
                        <Icon as={FaPhoneAlt} boxSize={{ base: 3, md: 5 }} />
                      </Flex>
                      <Text fontSize={{ base: "sm", md: "md" }}>
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
                        fontSize={{ base: "sm", md: "md" }}
                        maxW="100%" // Asegura que el texto se ajuste
                      >
                        Asistencia técnica 24/7 para clientes
                      </Text>
                    </HStack>
                  </Stack>
                </MotionBox>
              </Stack>
            </Box>
            
            {/* Sección de contacto directo */}
            <Box p={{ base: 4, sm: 6, md: 10 }} width="100%"> {/* Reducido el padding en móviles */}
              <Stack spacing={{ base: 4, md: 7 }}> {/* Reducido el espaciado */}
                <MotionBox variants={itemVariants}>
                  <Heading 
                    fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }} // Ajuste para móviles
                    color={accentColor}
                    fontWeight="bold"
                    mb={{ base: 2, md: 4 }}
                  >
                    Contacto inmediato
                  </Heading>
                  
                  <Text 
                    fontSize={{ base: "sm", sm: "md", md: "lg" }} 
                    color={textColor} 
                    mb={{ base: 3, md: 5 }}
                  >
                    ¿Necesita un presupuesto urgente o tiene consultas técnicas sobre ventilación, tratamiento de aire o montaje de conductos? Nuestro equipo está listo para ofrecerle soluciones a medida.
                  </Text>
                  
                  <Divider my={{ base: 3, md: 5 }} borderColor="gray.200" />
                </MotionBox>
                
                <MotionBox variants={itemVariants}>
                  <Heading 
                    as="h3" 
                    fontSize={{ base: "sm", md: "lg" }} 
                    mb={{ base: 3, md: 6 }} 
                    color={textColor}
                  >
                    Seleccione el método de contacto que prefiera:
                  </Heading>
                  
                  <Stack spacing={{ base: 3, md: 5 }}> {/* Reducido el espaciado */}
                    <MotionButton
                      as="a"
                      size={{ base: "md", md: "lg" }} // Más pequeño en móvil
                      height={{ base: "auto", md: "60px" }}
                      leftIcon={<Icon as={FaPhoneAlt} boxSize={{ base: 4, md: 5 }} />}
                      bg={accentColor}
                      color="white"
                      _hover={{ bg: `${accentColor}` }}
                      borderRadius="lg"
                      boxShadow="md"
                      justifyContent="flex-start"
                      px={{ base: 3, md: 5 }} // Reducido padding horizontal
                      variants={buttonVariants}
                      whileHover="hover"
                      py={{ base: 3, md: 5 }} // Reducido padding vertical
                      width="100%" // Asegura que ocupe todo el ancho
                    >
                      <Flex width="100%" justify="space-between" align="center" flexWrap={{ base: "wrap", sm: "nowrap" }}>
                        <Text fontWeight="semibold" fontSize={{ base: "xs", md: "md" }}>Llamada directa</Text>
                        <Text fontWeight="bold" fontSize={{ base: "xs", md: "md" }}>643 01 96 46</Text>
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
                      borderRadius="lg"
                      justifyContent="flex-start"
                      _hover={{ bg: "green.600" }}
                      boxShadow="md"
                      px={{ base: 3, md: 5 }}
                      py={{ base: 3, md: 5 }}
                      width="100%"
                    >
                      <Flex width="100%" justify="space-between" align="center">
                        <Text fontWeight="semibold" fontSize={{ base: "xs", md: "md" }}>WhatsApp</Text>
                        <Text fontWeight="bold" fontSize={{ base: "xs", md: "md" }}>Respuesta rápida</Text>
                      </Flex>
                    </Button>     
                    
                    <MotionButton
                      as="a"
                      size={{ base: "md", md: "lg" }}
                      height={{ base: "auto", md: "60px" }}
                      leftIcon={<Icon as={FaEnvelope} boxSize={{ base: 4, md: 5 }} />}
                      bg="gray.700"
                      color="white"
                      _hover={{ bg: "gray.800" }}
                      borderRadius="lg"
                      boxShadow="md"
                      justifyContent="flex-start"
                      px={{ base: 3, md: 5 }}
                      variants={buttonVariants}
                      whileHover="hover"
                      py={{ base: 3, md: 5 }}
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
                  </Stack>
                </MotionBox>
                
                <MotionBox variants={itemVariants} mt={{ base: 3, md: 6 }}>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                    Ofrecemos consultas técnicas especializadas y presupuestos sin compromiso
                    para proyectos de fabricación industrial.
                  </Text>
                </MotionBox>
              </Stack>
            </Box>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactoInmediato;