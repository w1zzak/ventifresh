// src/pages/SobreNosotros.tsx
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Grid,
  Container,
  useColorModeValue,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { FaTools, FaIndustry, FaCog, FaCheckCircle } from "react-icons/fa";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bright from '../assets/bright-coastal.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import helecoidal8 from '../assets/helecoidal-8.jpeg'
import fibra6 from '../assets/fibra-6.jpeg'

export default function SobreNosotros() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Inicializar Swiper
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, []);

  const bgGradient = useColorModeValue(
    "linear(to-b, gray.50, blue.50)",
    "linear(to-b, gray.900, blue.900)"
  );
  
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const accentColor = useColorModeValue("blue.600", "blue.300");

  return (
    <>
      {/* Hero Section */}
      <Box 
        py={20} 
        bg={bgGradient}
        position="relative"
        overflow="hidden"
      >
        {/* Background elements */}
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          right="0" 
          bottom="0" 
          opacity="0.05"
          backgroundImage="url('/assets/blueprint-pattern.png')"
          backgroundRepeat="repeat"
          zIndex="0"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="1">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <Box>
              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="800"
                bgGradient="linear(to-r, blue.600, cyan.500)"
                backgroundClip="text"
                lineHeight="1.1"
                mb={6}
              >
                Innovación Industrial en Cada Detalle
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={textColor}
                lineHeight="tall"
                mb={8}
              >
                En <strong>Venti-Fresh</strong>, somos especialistas en ventilación y tratamiento de aire, con amplia experiencia en el montaje de conductos de fibra de vidrio, galvanizados, PVC y helicoidales. Con nuestra tecnología avanzada, ofrecemos soluciones precisas y de calidad, siempre adaptadas a lo que realmente necesitas.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Flex align="center" gap={3}>
                  <Icon as={FaCheckCircle} color={accentColor} boxSize={5} />
                  <Text fontWeight="medium">Precisión garantizada</Text>
                </Flex>
                <Flex align="center" gap={3}>
                  <Icon as={FaCheckCircle} color={accentColor} boxSize={5} />
                  <Text fontWeight="medium">Materiales certificados</Text>
                </Flex>
                <Flex align="center" gap={3}>
                  <Icon as={FaCheckCircle} color={accentColor} boxSize={5} />
                  <Text fontWeight="medium">Entrega puntual</Text>
                </Flex>
                <Flex align="center" gap={3}>
                  <Icon as={FaCheckCircle} color={accentColor} boxSize={5} />
                  <Text fontWeight="medium">Soporte técnico</Text>
                </Flex>
              </SimpleGrid>
            </Box>

            <Box 
              borderRadius="lg" 
              overflow="hidden" 
              boxShadow="xl"
              transform={{ base: "none", md: "rotate(2deg)" }}
            >
              <Image
                src={helecoidal8}
                alt="Fabricación industrial de precisión"
                w="100%"
                h="auto"
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Box py={20} bg={useColorModeValue("white", "gray.800")}>
        <Container maxW="container.xl">
          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl" }}
            mb={16}
            position="relative"
            _after={{
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              bg: accentColor,
              marginTop: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Nuestra Especialización
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box 
              p={8} 
              bg={cardBg} 
              borderRadius="xl" 
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
            >
              <Icon as={FaCog} boxSize={12} color={accentColor} mb={6} />
              <Heading as="h3" size="lg" mb={4}>Fibra de Vidrio</Heading>
              <Text color={textColor}>
                Fabricación a medida de productos en fibra de vidrio para diversos usos industriales.
              </Text>
            </Box>

            <Box 
              p={8} 
              bg={cardBg} 
              borderRadius="xl" 
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
            >
              <Icon as={FaIndustry} boxSize={12} color={accentColor} mb={6} />
              <Heading as="h3" size="lg" mb={4}>Sistemas Helicoidales</Heading>
              <Text color={textColor}>
                Diseñamos y fabricamos sistemas helicoidales para ofrecer un rendimiento óptimo.
              </Text>
            </Box>

            <Box 
              p={8} 
              bg={cardBg} 
              borderRadius="xl" 
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
            >
              <Icon as={FaTools} boxSize={12} color={accentColor} mb={6} />
              <Heading as="h3" size="lg" mb={4}>Chapas</Heading>
              <Text color={textColor}>
                Diseño y fabricación de ductos y estructuras en chapa metálica de alta calidad.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={20} bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW="container.xl">
          <Grid 
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 10, lg: 20 }}
            alignItems="center"
          >
            <Box>
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={6}
              >
                Nos movemos por la{" "}
                <Text 
                  as="span" 
                  bgGradient="linear(to-r, blue.600, cyan.500)" 
                  backgroundClip="text"
                >
                  excelencia industrial
                </Text>
              </Heading>

              <Text fontSize="lg" color={textColor} mb={8} lineHeight="tall">
              <strong>Venti-Fresh</strong> es una empresa especializada en ventilación, tratamiento de aire y montaje de conductos. Nuestro equipo de profesionales se dedica a brindar soluciones personalizadas y de calidad, asegurando que cada proyecto se ajuste a las necesidades de nuestros clientes. Nos enfocamos en ofrecer servicios de montaje de conductos de fibra de vidrio, galvanizados, PVC y helicoidales, utilizando materiales y técnicas que garantizan un rendimiento duradero.
              </Text>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
                <Box>
                  <Heading as="h4" size="md" color={accentColor} mb={2}>
                    Tecnología de punta
                  </Heading>
                  <Text>Equipamiento industrial moderno para resultados óptimos</Text>
                </Box>
                <Box>
                  <Heading as="h4" size="md" color={accentColor} mb={2}>
                    Personalización total
                  </Heading>
                  <Text>Soluciones adaptadas a sus especificaciones exactas</Text>
                </Box>
                <Box>
                  <Heading as="h4" size="md" color={accentColor} mb={2}>
                    Control de calidad
                  </Heading>
                  <Text>Verificamos cada paso para garantizar la calidad.</Text>
                </Box>
                <Box>
                  <Heading as="h4" size="md" color={accentColor} mb={2}>
                    Servicio integral
                  </Heading>
                  <Text>Desde el diseño hasta la implementación final</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Flex 
              justify="center"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                width: "300px",
                height: "300px",
                background: useColorModeValue("blue.50", "blue.900"),
                borderRadius: "full",
                right: { base: "0", lg: "-10%" },
                top: "-10%",
                zIndex: "0",
              }}
            >
              <Image
                src={fibra6}
                alt="Manufactura de precisión"
                borderRadius="xl"
                boxShadow="2xl"
                objectFit="cover"
                width="100%"
                maxH="500px"
                zIndex="1"
              />
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section with Swiper */}
      <Box py={16} bg={useColorModeValue("blue.600", "blue.700")}>
        <Container maxW="container.lg">
          <Heading
            textAlign="center"
            color="white"
            mb={12}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Lo que dicen nuestros clientes
          </Heading>

          {/* Swiper container */}
          <Box 
            className="swiper-container" 
            ref={swiperRef}
            position="relative"
            px={{ base: 4, md: 12 }}
          >
            <Box className="swiper-wrapper">
              {/* Testimonial 1 */}
              <Box className="swiper-slide">
                <Box 
                  bg="rgba(255,255,255,0.1)" 
                  backdropFilter="blur(10px)"
                  p={8} 
                  borderRadius="xl" 
                  textAlign="center"
                >
                  <Text fontSize="3xl" color="white" mb={4}>★★★★★</Text>
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    color="white" 
                    mb={8} 
                    lineHeight="tall"
                  >
                    "La calidad de los componentes helicoidales que nos fabricaron fue excelente. El equipo entendió nuestras necesidades y entregó el pedido antes de lo esperado. Sin duda, seguiremos trabajando juntos en el futuro."
                  </Text>
                  <Flex direction="column" align="center">
                    <Image
                      src={bright}
                      alt="Alberto Méndez"
                      boxSize="70px"
                      borderRadius="full"
                      objectFit="cover"
                      mb={3}
                      border="3px solid white"
                    />
                    <Text color="white" fontWeight="bold">Alberto Méndez</Text>
                  </Flex>
                </Box>
              </Box>

              {/* Testimonial 2 */}
              <Box className="swiper-slide">
                <Box 
                  bg="rgba(255,255,255,0.1)" 
                  backdropFilter="blur(10px)"
                  p={8} 
                  borderRadius="xl" 
                  textAlign="center"
                >
                  <Text fontSize="3xl" color="white" mb={4}>★★★★★</Text>
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    color="white" 
                    mb={8} 
                    lineHeight="tall"
                  >
                    "Excelente servicio, muy profesionales y atentos. Solucionaron rápidamente nuestro problema con los conductos de ventilación. ¡Totalmente recomendados! Gracias por su dedicación y calidad."
                  </Text>
                  <Flex direction="column" align="center">
                    <Image
                      src={profile2}
                      alt="Carmen Rodríguez"
                      boxSize="70px"
                      borderRadius="full"
                      objectFit="cover"
                      mb={3}
                      border="3px solid white"
                    />
                    <Text color="white" fontWeight="bold">Carmen Rodríguez</Text>
                  </Flex>
                </Box>
              </Box>

              {/* Testimonial 3 */}
              <Box className="swiper-slide">
                <Box 
                  bg="rgba(255,255,255,0.1)" 
                  backdropFilter="blur(10px)"
                  p={8} 
                  borderRadius="xl" 
                  textAlign="center"
                >
                  <Text fontSize="3xl" color="white" mb={4}>★★★★★</Text>
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    color="white" 
                    mb={8} 
                    lineHeight="tall"
                  >
                    "La atención al cliente es excelente, siempre dispuestos a ayudar y resolver cualquier duda. Estoy muy contento con su trabajo y la calidad de sus servicios."
                  </Text>
                  <Flex direction="column" align="center">
                    <Image
                      src={profile3}
                      alt="Miguel Sánchez"
                      boxSize="70px"
                      borderRadius="full"
                      objectFit="cover"
                      mb={3}
                      border="3px solid white"
                    />
                    <Text color="white" fontWeight="bold">Miguel Sánchez</Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
            
            {/* Pagination & Navigation */}
            <Box className="swiper-pagination" position="relative" mt={8}></Box>
            <Box 
              className="swiper-button-prev" 
              color="white" 
              _after={{ fontSize: "20px" }}
              display={{ base: "none", md: "flex" }}
            ></Box>
            <Box 
              className="swiper-button-next" 
              color="white" 
              _after={{ fontSize: "20px" }}
              display={{ base: "none", md: "flex" }}
            ></Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}