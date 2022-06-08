import { Box, Button, Flex, HStack, Image, Link, Stack, Text } from "@chakra-ui/react"

const Hero = () => {
    return ( 

        <Box pb='145px'>
            <Flex direction={'row'} justifyContent='space-between'>
                <Stack direction='row' spacing='98px'>
                    <Image src='/logo.png' w='54px' h='56px' alt='logo' />
                    <HStack spacing='54px'>
                        <Text fontSize='18px' fontWeight='500' color='#CC23E4' letterSpacing='0.02em'>Home</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>How it works</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>Services</Text>
                        <Text fontSize='18px' fontWeight='500' color='#fff' letterSpacing='0.02em'>Roadmap</Text>
                    </HStack>
                </Stack>
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
            </Flex>

            <Flex mt='144px' direction={'row'}>
                <Box>
                    <Text fontSize='84px' fontWeight='700' color='#fff'>Discover Rare
                        Collections Of<br />
                        Art & NFT’s</Text>
                    <Text my='55px' fontSize='24px' fontWeight='400' color='#fff'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </Text>
                    <HStack spacing='30px'>
                        <Button
                            size='md'
                            height='66px'
                            width='193px'
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
                            height='66px'
                            width='193px'
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
                <Box bgImage='/a-hero.png' bgRepeat='no-repeat' bgSize='cover' w='100%' h='960px'> 
                    {/* <Image src='/a-hero.png' alt='' /> */}
                </Box>
            </Flex>
        </Box>
    )
}

export default Hero