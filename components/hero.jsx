import { useDisclosure,Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Hide, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button 
            ref={btnRef} bgColor='transparent' color='#fff' w='auto' h='54px' onClick={onOpen}>
            <Stack>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.23029H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9.49023 12H21.0002" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 12H5.99" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 17.7697H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </Stack>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent  bgColor={'#2C0F2F'}>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
                    <VStack spacing='54px'>
                        <Text fontSize='18px' fontWeight='500' color='#CC23E4' letterSpacing='0.02em'>Home</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>How it works</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>Services</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>Roadmap</Text>
                    </VStack>
                    <Link textDecor='none'>
                        <Button
                            mt='54px'
                            size='md'
                            height='66px'
                            width='251px'
                            bgGradient={'linear(to-l, #F827DE, #2B14F9)'}
                            color='#fff'
                            _hover={{ bg: 'linear(to-l, #F827DE, #2B14F9)' }}
                            _active={{
                            bg: '#linear(to-l, #F827DE, #2B14F9)',
                            transform: 'scale(0.98)',
                            }}
                            >
                            Connect Wallet
                        </Button>
                    </Link>
            </DrawerBody>
  
            <DrawerFooter>
              <Button 
                            variant='outline' 
                            mr={3} onClick={onClose} 
                            border='2px'
                            borderColor='#F827DE'
                            bgColor='transparent'
                            color='#fff'
                            _hover={{ bg: 'linear(to-l, #F827DE, #2B14F9)' }}
                            _active={{
                            bg: '#linear(to-l, #F827DE, #2B14F9)',
                            transform: 'scale(0.98)',
                            }}
                    
                    >
                Close
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }



const Hero = () => {
    return ( 

        <Box pb='145px'>
            <Flex direction={'row'} justifyContent='space-between'>
                <Stack direction='row' spacing='98px'>
                    <Image src='/logo.png' w='54px' h='56px' alt='logo' /> 
                </Stack>
                <Flex display={{base:'inline', md:'inline', lg:'none', xl:'none', '2xl': 'none'}}>
                        <DrawerExample />
                    </Flex>
                <Hide below='lg'>
                    <HStack spacing='54px'>
                        <Text fontSize='18px' fontWeight='500' color='#CC23E4' letterSpacing='0.02em'>Home</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>How it works</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>Services</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>Roadmap</Text>
                    </HStack>
                    <Link textDecor='none'>
                    <Button
                        size='md'
                        height='66px'
                        width='251px'
                        bgGradient={'linear(to-l, #F827DE, #2B14F9)'}
                        color='#fff'
                        _hover={{ bg: 'linear(to-l, #F827DE, #2B14F9)' }}
                        _active={{
                          bg: '#linear(to-l, #F827DE, #2B14F9)',
                          transform: 'scale(0.98)',
                        }}
                        >
                        Connect Wallet
                    </Button>
                </Link>
                </Hide>
                
            </Flex>

            <Flex justifyContent={'center'} mt='144px' direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} textAlign={{base:'center',md:'center',lg:'left',xl:'left','2xl':'left'}}>
                <Box>
                    <Text fontSize={{base:'36px',md:'84px'}} fontWeight='700' color='#fff'>Discover Rare
                        Collections Of<br />
                        Art & NFT’s</Text>
                    <Text my='55px' fontSize={{base:'12px',md:'24px'}} fontWeight='400' color='#fff'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </Text>
                    <HStack ml={{base:'4px',md:'160px',lg:'0px',xl:'0px','2xl':'0px'}} spacing='30px'>
                        <Button
                            size='md'
                            height={{base:'46px',md:'66px'}}
                            width={{base:'134px',md:'193px'}}
                            bgGradient={'linear(to-l, #F827DE, #2B14F9)'}
                            color='#fff'
                            _hover={{ bg: 'linear(to-l, #F827DE, #2B14F9)' }}
                            _active={{
                            bg: '#linear(to-l, #F827DE, #2B14F9)',
                            transform: 'scale(0.98)',
                            }}
                            >
                            Explore
                        </Button>
                        <Button
                            size='md'
                            height={{base:'46px',md:'66px'}}
                            width={{base:'134px',md:'193px'}}
                            border='2px'
                            borderColor='#F827DE'
                            bgColor='transparent'
                            color='#fff'
                            _hover={{ bg: 'linear(to-l, #F827DE, #2B14F9)' }}
                            _active={{
                            bg: '#linear(to-l, #F827DE, #2B14F9)',
                            transform: 'scale(0.98)',
                            }}
                            >
                            Create
                        </Button>
                    </HStack>
                </Box>
                <Box bgImage='/a-hero.png' bgRepeat='no-repeat' bgSize='cover' w='100%' h={{base:'361px',md:'960px'}} mt={{base:'40px',md:'40px',lg:'0px',xl:'0px','2xl':'0px'}}> 
                    {/* <Image src='/a-hero.png' alt='' /> */}
                </Box>
            </Flex>
        </Box>
    )
}

export default Hero