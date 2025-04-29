import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  Image,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaHome,
  FaIndustry,
  FaPhoneAlt,
  FaThermometerHalf,
  FaTools
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
// Importamos Swiper y sus módulos
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import helecoidal5 from '../assets/helecoidal5.jpeg'
import chapa7 from '../assets/chapa7.jpeg'
import montaje1 from '../assets/montaje-1.jpeg'
import campana from '../assets/campanas.jpeg'

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBadge = motion(Badge);

// Interfaz para servicios
interface Servicio {
  icon: IconType;
  title: string;
}

// Interfaz para proyectos
interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

const Hero: React.FC = () => {
  // Estado para controlar la carga de imágenes
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false, false]);

  // Animaciones
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    });
  }, [controls]);

  // Servicio destacados
  const servicios: Servicio[] = [
    { icon: FaHome, title: "Ventilación Controlada" },
    { icon: FaIndustry, title: "Fabricación de Fibra de Vidrio" },
    { icon: FaTools, title: "Fabricación de Chapas" },
    { icon: FaThermometerHalf, title: "Sistemas Helecoidales" }
  ];

  // Datos de proyectos (ejemplos)
  const proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: "Helecoidal",
      descripcion: "Sistemas de ventilación y extracción con ductos helecoidales adaptables.",
      imagen: helecoidal5,
    },
    {
      id: 2,
      titulo: "Chapa",
      descripcion: "Diseño y fabricación de ductos y estructuras en chapa metálica de alta calidad.",
      imagen: chapa7,
    },
    {
      id: 3,
      titulo: "Montaje e instalación de sistemas de recuperación de Aires", 
      descripcion: "Soluciones eficientes para la instalación de sistemas que permiten recuperar y reutilizar el aire, optimizando el consumo energético y mejorando la calidad ambiental.",
      imagen: montaje1,
    },
    {
      id: 4,
      titulo: "Campanas",
      descripcion: "Instalación y fabricación de campanas extractoras industriales, garantizando una correcta ventilación y filtrado en cocinas o espacios de trabajo.",
      imagen: campana,
    }
  ];

  // Función para manejar la carga de imágenes
  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  // Precargar imágenes al montar el componente
  useEffect(() => {
    proyectos.forEach((proyecto, index) => {
      const img = new window.Image();
      img.src = proyecto.imagen;
      img.onload = () => handleImageLoad(index);
    });
  }, []);

  return (
    <Box position="relative">
      {/* Fondo con gradiente mejorado */}
      <Box
        as="section"
        minH="100vh"
        bgImage="linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
        color="white"
        overflow="hidden"
        position="relative"
      >
        {/* Elementos decorativos de fondo */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          position="absolute"
          top="5%"
          left="10%"
          boxSize="300px"
          borderRadius="full"
          bg="blue.300"
          filter="blur(80px)"
        />
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          position="absolute"
          bottom="10%"
          right="5%"
          boxSize="250px"
          borderRadius="full"
          bg="purple.300"
          filter="blur(60px)"
        />
        
        {/* Contenido principal */}
        <Container maxW="7xl" py={20}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            gap={{ base: 10, lg: 16 }}
          >
            {/* Sección de texto */}
            <MotionFlex
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              flex="1"
              direction="column"
              alignItems={{ base: 'center', lg: 'flex-start' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <MotionBadge 
                colorScheme="blue" 
                fontSize="md" 
                px={3} 
                py={1} 
                borderRadius="full" 
                mb={4}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Expertos en Climatización
              </MotionBadge>
              
              <MotionHeading 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} 
                lineHeight="shorter"
                fontWeight="bold"
              >
                Soluciones <Box as="span" color="blue.300">Inteligentes</Box> para tu Espacio
              </MotionHeading>
              
              <MotionText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                fontSize="xl" 
                color="blue.100" 
                mt={6} 
                maxW="lg"
              >
                Servicios profesionales de ventilación controlada, fabricación de fibra de vidrio, chapas, 
                sistemas helecoidales y más. Adaptados a las necesidades específicas de tu hogar o negocio.
              </MotionText>
              
              {/* Estadísticas rápidas */}
              <MotionFlex
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                mt={8}
                gap={8}
                wrap="wrap"
                justify={{ base: 'center', lg: 'flex-start' }}
              >
                <Box textAlign="center">
                  <Text fontSize="3xl" fontWeight="bold">5+</Text>
                  <Text fontSize="sm" color="blue.200">Años de experiencia</Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="3xl" fontWeight="bold">200+</Text>
                  <Text fontSize="sm" color="blue.200">Proyectos realizados</Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="3xl" fontWeight="bold">100%</Text>
                  <Text fontSize="sm" color="blue.200">Satisfacción cliente</Text>
                </Box>
              </MotionFlex>
              
              {/* Botones de CTA */}
              <MotionFlex
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                mt={10}
                direction={{ base: 'column', sm: 'row' }}
                gap={4}
                width={{ base: '100%', sm: 'auto' }}
              >
                <Link to="/contacto" style={{ width: '100%' }}>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    bg="blue.400"
                    rounded="full"
                    px={8}
                    leftIcon={<FaPhoneAlt />}
                    _hover={{ bg: 'blue.500', transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    w={{ base: '100%', sm: 'auto' }}
                  >  
                    Solicitar Presupuesto
                  </Button>
                </Link>
                <Link to="/servicios" style={{ width: '100%' }}>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="blue.300"
                    rounded="full"
                    px={8}
                    rightIcon={<FaArrowRight />}
                    _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    w={{ base: '100%', sm: 'auto' }}
                  >
                    Ver Servicios
                  </Button>
                </Link>
              </MotionFlex>
            </MotionFlex>
            {/* Imagen principal con animación */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              flex="1"
              maxW={{ base: '100%', lg: '550px' }}
              position="relative"
            >
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                position="relative"
                height={{ base: '300px', md: '400px' }}
                width="100%"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '2xl',
                  padding: '2px',
                  background: 'linear-gradient(45deg, #4299E1, transparent, #3182CE)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  zIndex: 2
                }}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    borderRadius: '16px',
                  }}
                  updateOnWindowResize={true}
                  observer={true}
                  observeParents={true}
                >
                  {proyectos.map((proyecto, index) => (
                    <SwiperSlide key={proyecto.id}>
                      <Box 
                        position="relative" 
                        height={{ base: '300px', md: '400px' }}
                        width="100%"
                        overflow="hidden"
                      >
                        {/* Usamos la etiqueta Image para mejor compatibilidad en móviles */}
                        <Image
                          src={proyecto.imagen}
                          alt={proyecto.titulo}
                          objectFit="cover"
                          objectPosition="center"
                          width="100%"
                          height="100%"
                          position="absolute"
                          top="0"
                          left="0"
                          filter="brightness(0.7)"
                          onLoad={() => handleImageLoad(index)}
                          fallback={
                            <Box
                              width="100%"
                              height="100%"
                              bg="blue.600"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Text>Cargando imagen...</Text>
                            </Box>
                          }
                        />
                        
                        {/* Contenido superpuesto */}
                        <Flex
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          direction="column"
                          bg="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%)"
                          p={5}
                          color="white"
                          zIndex={1}
                        >
                          <Heading size="md" mb={2}>
                            {proyecto.titulo}
                          </Heading>
                          <Text 
                            fontSize="sm" 
                            noOfLines={2}
                            color="blue.100"
                          >
                            {proyecto.descripcion}
                          </Text>
                        </Flex>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              
              {/* Elemento decorativo adicional */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                width="80px"
                height="80px"
                borderRadius="full"
                bg="blue.400"
                opacity="0.2"
                zIndex={1}
              />
              <Box
                position="absolute"
                bottom="-15px"
                left="-15px"
                width="60px"
                height="60px"
                borderRadius="full"
                bg="blue.500"
                opacity="0.15"
                zIndex={1}
              />
            </MotionBox>
          </Flex>

          {/* Servicios destacados */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            mt={{ base: 20, lg: 32 }}
          >
            <Divider mb={10} opacity={0.3} />
            <Heading size="md" mb={6} textAlign="center">Nuestros Servicios Destacados</Heading>
            <Flex 
              justify="space-between" 
              wrap="wrap" 
              gap={6}
            >
              {servicios.map((servicio, index) => (
                <MotionBox 
                  key={index} 
                  bg="whiteAlpha.100" 
                  p={5} 
                  borderRadius="xl" 
                  w={{ base: '100%', md: '45%', lg: '22%' }}
                  textAlign="center"
                  _hover={{ 
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-8px)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + (index * 0.1) }}
                >
                  <Icon as={servicio.icon} boxSize={8} mb={3} color="blue.300" />
                  <Text fontWeight="bold">{servicio.title}</Text>
                </MotionBox>
              ))}
            </Flex>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;