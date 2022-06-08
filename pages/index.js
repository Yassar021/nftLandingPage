import Content from "../components/content"
import Content2 from "../components/content2"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Mansion from "../components/mansion"
import RoadMap from "../components/roadmap"

const { Box } = require("@chakra-ui/react")
const { default: Head } = require("next/head")

const Index = () => {
  return(
    <>
      <Head>
        <title>NFT Marketplace</title>
      </Head>
    
    <Box bgColor='#2C0F2F' px={{base:'20px',md:'20px',lg:'40px',xl:'120px','2xl':'120px'}} pt='80px'>
      <Hero />
      <Content />
      <Content2 />
      <RoadMap />
      <Mansion />
    </Box>
    
    <Footer />
    </>
  )
}

export default Index