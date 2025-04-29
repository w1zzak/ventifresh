// pages/Servicios.tsx
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Container,
  SimpleGrid,
  Flex,
  Icon,
  HStack,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  IconButton
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { FaTools, FaIndustry, FaCog, FaFan, FaRecycle, FaHardHat } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ContactoInmediato from "../components/ContactoInmediato";
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Imágenes de ejemplo 
import helecoidal from '../assets/helecoidal.jpeg';
import fibra from '../assets/fibra.jpeg';
import chapas from '../assets/chapas.jpeg';
import ventilacion from '../assets/ventilacion1.jpeg';
import ventilacion2 from '../assets/ventilacion2.jpeg';
import recuperacion from '../assets/recuperacion-aires.jpeg';
import chapa2 from '../assets/chapa2.jpeg';
import helecoidal2 from '../assets/helecoidal2.jpeg';
import helecoidal3 from '../assets/helecoidal3.jpeg';
import recuperacion2 from '../assets/recuperacion-aires2.jpeg';
import recuperacion3 from '../assets/recuperacion-aires3.jpeg';
import recuperacion4 from '../assets/recuperacion-aires4.jpeg';
import chapa3 from '../assets/chapa3.jpeg';
import helecoidal4 from '../assets/helecoidal4.jpeg';
import fibra2 from '../assets/fibra2.jpeg';
import fibra3 from '../assets/fibra3.jpeg';
import campanas from '../assets/campanas.jpeg';
import campanas2 from '../assets/campanas2.jpeg';
import ventilacion3 from '../assets/ventilacion-10.jpeg'
import ventilcacion4 from '../assets/ventilacion4.jpeg'

// Define interfaces para mejor tipado
interface ServicioData {
  titulo: string;
  descripcion: string;
  imagenes: string[];
  icono: React.ComponentType;
  color: string;
}

const serviciosData: ServicioData[] = [
  {
    titulo: "Ventilación controlada",
    descripcion: "Soluciones de ventilación eficientes para espacios residenciales, comerciales e industriales.",
    imagenes: [ventilacion, ventilacion2, ventilacion3, ventilcacion4],
    icono: FaFan,
    color: "blue.500",
  },
  {
    titulo: "Fabricación de Fibra de Vidrio",
    descripcion: "Fabricación a medida de productos en fibra de vidrio para diversos usos industriales.",
    imagenes: [fibra, fibra2, fibra3],
    icono: FaCog,
    color: "green.500",
  },
  {
    titulo: "Chapa",
    descripcion: "Diseño y fabricación de ductos y estructuras en chapa metálica de alta calidad.",
    imagenes: [chapas, chapa2, chapa3],
    icono: FaIndustry,
    color: "purple.500",
  },
  {
    titulo: "Helecoidal",
    descripcion: "Sistemas de ventilación y extracción con ductos helecoidales adaptables.",
    imagenes: [helecoidal, helecoidal2, helecoidal3, helecoidal4],
    icono: FaTools,
    color: "orange.500",
  },
  {
    titulo: "Montaje e instalación de sistemas de recuperación de Aires",
    descripcion: "Soluciones eficientes para la instalación de sistemas que permiten recuperar y reutilizar el aire, optimizando el consumo energético y mejorando la calidad ambiental.",
    imagenes: [recuperacion, recuperacion2, recuperacion3, recuperacion4],
    icono: FaRecycle,
    color: "teal.500",
  },
  {
    titulo: "Campanas",
    descripcion: "Instalación y fabricación de campanas extractoras industriales, garantizando una correcta ventilación y filtrado en cocinas o espacios de trabajo.",
    imagenes: [campanas, campanas2],
    icono: FaHardHat,
    color: "red.500",
  },
];

const Servicios: React.FC = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<ServicioData | null>(null);
  const [indiceImagen, setIndiceImagen] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);
  const swiperInstanceRef = useRef<SwiperClass | null>(null);
  
  const bgGradient = useColorModeValue(
    "linear(to-b, gray.50, blue.50)",
    "linear(to-b, gray.900, blue.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");
  
  // Limpiar la instancia de Swiper al cerrar el modal
  const handleCloseModal = (): void => {
    // Destruir la instancia de Swiper al cerrar el modal
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.destroy(true, true);
      swiperInstanceRef.current = null;
    }
    onClose();
  };

  // Inicializar Swiper cuando el modal está abierto
  useEffect(() => {
    let initTimer: number; // Cambiado de NodeJS.Timeout a number para compatibilidad

    const initializeSwiper = (): void => {
      // Asegurarse de que hay un elemento DOM y un servicio seleccionado
      if (!swiperContainerRef.current || !servicioSeleccionado) return;
      
      // Destruir instancia previa si existe
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
      
      try {
        // Crear nueva instancia de Swiper
        swiperInstanceRef.current = new SwiperClass(swiperContainerRef.current, {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 30,
          initialSlide: indiceImagen,
          loop: servicioSeleccionado.imagenes.length > 1,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          observer: true,
          observeParents: true,
        });
      } catch (error) {
        console.error("Error al inicializar Swiper:", error);
      }
    };

    if (isOpen && servicioSeleccionado) {
      // Dar tiempo para que el DOM se renderice antes de inicializar Swiper
      initTimer = window.setTimeout(initializeSwiper, 500);
    }

    return () => {
      // Limpiar el timer al desmontar
      if (initTimer) window.clearTimeout(initTimer);
    };
  }, [isOpen, servicioSeleccionado, indiceImagen]);

  // Funciones para la navegación manual
  const irAnterior = (): void => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slidePrev();
    } else {
      console.warn("Swiper no está inicializado");
    }
  };

  const irSiguiente = (): void => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideNext();
    } else {
      console.warn("Swiper no está inicializado");
    }
  };

  // Abrir el modal con el servicio seleccionado
  const abrirModal = (servicio: ServicioData, indice: number = 0): void => {
    setServicioSeleccionado(servicio);
    setIndiceImagen(indice);
    onOpen();
  };

  return (
    <Box bg={bgGradient} py={16} px={{ base: 4, md: 0 }}>
      {/* Encabezado de la sección */}
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="800"
            bgGradient="linear(to-r, blue.600, cyan.500)"
            backgroundClip="text"
            mb={4}
          >
            Nuestros Servicios
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.600"
            maxW="2xl"
            mx="auto"
          >
            Descubre la amplia gama de servicios que ofrecemos para satisfacer tus necesidades en ventilación, climatización y más.
          </Text>
        </Box>

        {/* Grid de servicios */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {serviciosData.map((servicio, index) => (
            <Box
              key={index}
              bg={cardBg}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{ 
                transform: "translateY(-5px)", 
                boxShadow: "2xl",
                bg: cardHoverBg
              }}
            >
              {/* Imagen principal del servicio */}
              <Box 
                position="relative" 
                height="240px" 
                cursor="pointer"
                onClick={() => abrirModal(servicio)}
              >
                <Image
                  src={servicio.imagenes[0]}
                  alt={servicio.titulo}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
                
                {/* Se eliminó el Tag que mostraba la cantidad de imágenes */}
              </Box>

              {/* Contenido del servicio */}
              <Box p={6}>
                <Flex align="center" mb={4}>
                  <Icon 
                    as={servicio.icono} 
                    color={servicio.color} 
                    boxSize={6} 
                    mr={3} 
                  />
                  <Heading size="md" color="gray.700">
                    {servicio.titulo}
                  </Heading>
                </Flex>
                
                <Text color="gray.600" mb={4}>
                  {servicio.descripcion}
                </Text>

                {/* Miniaturas de imágenes adicionales */}
                {servicio.imagenes.length > 1 && (
                  <HStack spacing={2} mt={4} overflowX="auto" pb={2}>
                    {servicio.imagenes.map((imagen, idx) => (
                      <Box 
                        key={idx}
                        width="60px" 
                        height="60px" 
                        borderRadius="md"
                        overflow="hidden"
                        opacity={0.7}
                        transition="all 0.2s"
                        cursor="pointer"
                        _hover={{ opacity: 1 }}
                        onClick={() => abrirModal(servicio, idx)}
                      >
                        <Image 
                          src={imagen} 
                          alt={`${servicio.titulo} ${idx + 1}`} 
                          objectFit="cover"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                    ))}
                  </HStack>
                )}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Modal para visualizar imágenes */}
      <Modal 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
        size="xl" 
        isCentered
      >
        <ModalOverlay backdropFilter="blur(8px)" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton 
            color="white" 
            bg="rgba(0,0,0,0.5)" 
            borderRadius="full" 
            size="lg"
            p={2}
            zIndex={10}
          />
          <ModalBody p={0}>
            {servicioSeleccionado && (
              <Box 
                borderRadius="xl" 
                overflow="hidden" 
                bg={cardBg}
                boxShadow="2xl"
              >
                {/* Título del servicio en el modal */}
                <Box 
                  bg={servicioSeleccionado.color} 
                  p={4} 
                  color="white"
                >
                  <Flex align="center">
                    <Icon 
                      as={servicioSeleccionado.icono} 
                      boxSize={6} 
                      mr={3} 
                    />
                    <Heading size="md">
                      {servicioSeleccionado.titulo}
                    </Heading>
                  </Flex>
                </Box>

                {/* Contenedor del Swiper con posición relativa */}
                <Box 
                  position="relative"
                  height="400px"
                >
                  <Box 
                    className="swiper-container" 
                    ref={swiperContainerRef}
                    position="relative"
                    height="100%"
                    width="100%"
                  >
                    <Box className="swiper-wrapper">
                      {servicioSeleccionado.imagenes.map((imagen, idx) => (
                        <Box key={idx} className="swiper-slide" height="400px">
                          <Image
                            src={imagen}
                            alt={`${servicioSeleccionado.titulo} ${idx + 1}`}
                            objectFit="contain"
                            width="100%"
                            height="100%"
                          />
                        </Box>
                      ))}
                    </Box>
                    
                    {/* Paginación del Swiper */}
                    <Box 
                      className="swiper-pagination" 
                      position="absolute"
                      bottom="10px"
                      left="0"
                      right="0"
                      zIndex="1"
                    ></Box>
                    
                    {/* Controles nativos de Swiper (necesarios para integración) */}
                    <Box 
                      className="swiper-button-prev" 
                      color={servicioSeleccionado.color}
                      opacity="0" 
                    ></Box>
                    <Box 
                      className="swiper-button-next" 
                      color={servicioSeleccionado.color}
                      opacity="0" 
                    ></Box>
                  </Box>
                  
                  {/* Botones de navegación personalizados */}
                  <IconButton
                    aria-label="Imagen anterior"
                    icon={<ChevronLeftIcon w={8} h={8} />}
                    position="absolute"
                    left="10px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="2"
                    bg="rgba(0,0,0,0.5)"
                    color="white"
                    borderRadius="full"
                    _hover={{ bg: "rgba(0,0,0,0.7)" }}
                    onClick={irAnterior}
                  />
                  <IconButton
                    aria-label="Imagen siguiente"
                    icon={<ChevronRightIcon w={8} h={8} />}
                    position="absolute"
                    right="10px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="2"
                    bg="rgba(0,0,0,0.5)"
                    color="white"
                    borderRadius="full"
                    _hover={{ bg: "rgba(0,0,0,0.7)" }}
                    onClick={irSiguiente}
                  />
                </Box>

                {/* Descripción en el modal */}
                <Box p={6}>
                  <Text color="gray.600">
                    {servicioSeleccionado.descripcion}
                  </Text>
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Sección de contacto inmediato */}
      <Box mt={20}>
        <ContactoInmediato />
      </Box>
    </Box>
  );
};

export default Servicios;