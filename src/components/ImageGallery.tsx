// src/components/ImageGallery.tsx
import { 
  Box, 
  Heading, 
  SimpleGrid, 
  Image, 
  Text, 
  Flex,
  Container,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, Transition, Variants } from "framer-motion";
import image1 from '../assets/image-1.jpeg'
import image2 from '../assets/image-2.jpeg'
import image3 from '../assets/chapas.jpeg'
import image4 from '../assets/chapa3.jpeg'
import image5 from '../assets/ventilacion-10.jpeg'
import image6 from '../assets/recuperacion-aires3.jpeg'

// Define the motion components with the correct types
const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionFlex = motion(Flex);

const images = [
  {
    src: image1,
    descripcion: "Montaje de conductos de ventilación.",
    category: "Instalación"
  },
  {
    src: image2,
    descripcion: "Sistemas HVAC industriales.",
    category: "Industrial"
  },
  {
    src: image3,
    descripcion: "Optimización de sistemas de aire.",
    category: "Eficiencia"
  },
  {
    src: image4,
    descripcion: "Mantenimiento y asistencia técnica.",
    category: "Soporte"
  },
  {
    src: image5,
    descripcion: "Sistemas de ventilación modernos.",
    category: "Ventilación"
  },
  {
    src: image6,
    descripcion: "Control de clima inteligente.",
    category: "Smart"
  },
];

export default function ImageGallery() {
  // Dynamic colors for light/dark mode
  const bgGradient = "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)";
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const accentColor = "blue.400";
  
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Define transition
  const motionTransition: Transition = {
    duration: 0.6
  };

  return (
    <Box 
      as="section" 
      py={20} 
      bgGradient={bgGradient}
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        boxSize="300px"
        borderRadius="full"
        bg="blue.400"
        filter="blur(100px)"
        opacity={0.1}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="8%"
        boxSize="250px"
        borderRadius="full"
        bg="purple.400"
        filter="blur(80px)"
        opacity={0.1}
      />
      
      <Container maxW="7xl">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          mb={16}
          textAlign="center"
        >
          <Badge 
            colorScheme="blue" 
            fontSize="md" 
            px={3} 
            py={1} 
            borderRadius="full" 
            mb={4}
          >
            Proyectos
          </Badge>
          <Heading 
            size="xl" 
            fontWeight="bold"
            mb={4}
          >
            Nuestro <Box as="span" color="blue.300">Trabajo</Box>
          </Heading>
          <Text 
            maxW="2xl" 
            mx="auto" 
            fontSize="lg" 
            color="blue.100"
          >
            Explorá nuestra galería de proyectos completados que muestran nuestra experiencia y calidad en cada detalle.
          </Text>
        </MotionBox>
        
        <MotionSimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {images.map((img, index) => (
            <MotionFlex
              key={index}
              direction="column"
              variants={itemVariants}
              bg={cardBg}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
              position="relative"
              role="group"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
              }}
            >
              <Box 
                position="relative" 
                height="220px"
                overflow="hidden"
              >
                <Image
                  src={img.src}
                  alt={`Trabajo ${index + 1}`}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  transition="transform 0.6s ease"
                  _groupHover={{ transform: "scale(1.08)" }}
                />
                
                {/* Category badge */}
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg={accentColor}
                  px={2}
                  py={1}
                  borderRadius="md"
                  color="white"
                  fontWeight="medium"
                >
                  {img.category}
                </Badge>
              </Box>
              
              <Box p={5}>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  color={textColor}
                  lineHeight="tall"
                >
                  {img.descripcion}
                </Text>
              </Box>
            </MotionFlex>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
}