import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import AboutUs from '../components/About'
import ImageGallery from '../components/ImageGallery'

export default function Landing() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <ImageGallery />
    </Box>
  )
}
