import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import logo from '../assets/logo.png'

const SobreNosotros = () => {
  return (
    <Box bg="gray.50" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
      >
        {/* Imagen a la izquierda */}
        <Image
          src={logo} // Asegúrate de que la imagen esté en la carpeta "public"
          alt="Funcionamiento VMC"
          boxSize={{ base: "250px", md: "350px" }}
          objectFit="contain"
        />

        {/* Texto a la derecha */}
        <Box maxW="600px">
          <Heading as="h2" size="xl" mb={4} color="blue.900">
            Sobre Nosotros
          </Heading>
          <Text fontSize="lg" color="gray.700">
          En <strong>Venti-Fresh</strong>, somos especialistas en ventilación y tratamiento de aire, ofreciendo soluciones modernas y eficientes para mejorar la calidad del aire en interiores. Nos dedicamos al montaje de conductos de fibra de vidrio, galvanizado, PVC y helicoidal, asegurando ambientes saludables, sustentables y energéticamente optimizados para hogares y espacios industriales.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SobreNosotros;
