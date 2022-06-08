const { Box, Flex, Image, HStack, Link, Text, Stack } = require("@chakra-ui/react")

const Footer = () => {
    return(
        <Box w='100%' h='193px' bgImage='/bg-footer.png' backgroundRepeat='no-repeat' bgSize='cover' px='120px' py='40px'>
            <Flex direction='row' justifyContent={'space-between'}>
                <Box>
                    <Image src='/logo.png' w='100%' h='87px' alt='logo' />
                </Box>
                <HStack spacing='72px'>
                    <Link><Text fontSize={'20px'} fontWeight='500' color={'#DB24E2'}>Privacy</Text></Link>
                    <Link><Text fontSize={'20px'} fontWeight='500' color={'#fff'}>Terms</Text></Link>
                    <Link><Text fontSize={'20px'} fontWeight='500' color={'#fff'}>Contact Us</Text></Link>
                </HStack>

                <HStack spacing={'30px'}>
                    <Link>
                        <Stack>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_129_17)">
                            <rect width="52" height="52" rx="14" fill="url(#paint0_linear_129_17)" fillOpacity="0.2"/>
                            </g>
                            <path d="M36.9263 16.9998C34.9191 16.0919 32.7957 15.4466 30.6122 15.0811C30.3398 15.5559 30.0231 16.1965 29.8027 16.7039C27.4834 16.3622 25.1239 16.3622 22.8047 16.7039C22.5614 16.1494 22.2882 15.6077 21.9859 15.0811C19.8005 15.4472 17.6756 16.094 15.6673 17.0042C11.6717 22.8419 10.5883 28.5345 11.13 34.1458C13.4624 35.8482 16.083 37.1462 18.8748 37.9818C19.5021 37.1472 20.057 36.264 20.5337 35.3411C19.627 35.007 18.7528 34.5956 17.9215 34.1117C18.1403 33.9549 18.3545 33.7907 18.5611 33.6221C23.5973 35.8988 29.0682 35.8988 34.0447 33.6221C34.2544 33.7907 34.4686 33.9549 34.6844 34.1117C33.8565 34.594 32.9796 35.0082 32.0676 35.3426C32.5435 36.2659 33.0983 37.1492 33.7264 37.9833C36.5205 37.1482 39.1428 35.8491 41.4758 34.1443C42.1109 27.6409 40.3909 22.0001 36.9263 16.9998ZM21.2193 30.6944C19.7073 30.6944 18.4678 29.3304 18.4678 27.6691C18.4678 26.0077 19.6813 24.6408 21.2193 24.6408C22.7572 24.6408 23.9968 26.0048 23.9707 27.6691C23.9723 29.3304 22.7572 30.6944 21.2193 30.6944ZM31.3866 30.6944C29.8746 30.6944 28.6351 29.3304 28.6351 27.6691C28.6351 26.0077 29.8486 24.6408 31.3866 24.6408C32.9245 24.6408 34.1641 26.0048 34.1381 27.6691C34.1381 29.3304 32.9245 30.6944 31.3866 30.6944Z" fill="url(#paint1_linear_129_17)"/>
                            <defs>
                            <filter id="filter0_b_129_17" x="-4" y="-4" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_129_17"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_129_17" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_129_17" x1="4.33333" y1="7.58333" x2="41.1667" y2="45.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D8E3FF"/>
                            <stop offset="1" stopColor="#FFF5EE" stopOpacity="0.51"/>
                            <stop offset="1" stopColor="#DDE7FF" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_129_17" x1="15.4822" y1="34.6292" x2="31.0187" y2="13.8668" gradientUnits="userSpaceOnUse">
                            <stop offset="0.03" stopColor="#A98D58"/>
                            <stop offset="0.1" stopColor="#B7995F"/>
                            <stop offset="0.22" stopColor="#DDB771"/>
                            <stop offset="0.31" stopColor="#FACF7F"/>
                            <stop offset="0.5" stopColor="#FCE88C"/>
                            <stop offset="0.63" stopColor="#FDFA96"/>
                            <stop offset="0.75" stopColor="#F6E18E"/>
                            <stop offset="1" stopColor="#E6A37B"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </Stack>
                    </Link>
                    <Link>
                        <Stack>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_129_18)">
                            <rect width="52" height="52" rx="14" fill="url(#paint0_linear_129_18)" fillOpacity="0.2"/>
                            </g>
                            <path d="M44.1675 15.3549C43.5905 15.6022 42.9973 15.811 42.3912 15.9806C43.1088 15.196 43.6559 14.2728 43.9899 13.2626C44.0648 13.0362 43.9871 12.7883 43.7946 12.6403C43.6023 12.492 43.3352 12.4743 43.1235 12.5956C41.8362 13.3336 40.4475 13.8641 38.9913 14.1742C37.5245 12.7886 35.5322 12 33.4726 12C29.1252 12 25.5882 15.4192 25.5882 19.622C25.5882 19.953 25.6099 20.2822 25.6528 20.6067C20.258 20.1488 15.2426 17.5854 11.7985 13.5012C11.6758 13.3556 11.4867 13.2772 11.2931 13.2922C11.0994 13.3068 10.9254 13.4124 10.8275 13.5747C10.129 14.7335 9.7597 16.0588 9.7597 17.4072C9.7597 19.2438 10.438 20.9863 11.6361 22.3479C11.2718 22.2259 10.9183 22.0735 10.5809 21.8924C10.3997 21.7949 10.1786 21.7964 9.99867 21.8962C9.81859 21.9959 9.70568 22.1794 9.70094 22.38C9.70011 22.4138 9.70011 22.4476 9.70011 22.4818C9.70011 25.2232 11.2263 27.6913 13.5597 29.0365C13.3592 29.0172 13.1589 28.9891 12.9598 28.9524C12.7546 28.9144 12.5436 28.984 12.4053 29.1353C12.2666 29.2865 12.2208 29.4972 12.2846 29.6896C13.1483 32.2964 15.372 34.2139 18.0602 34.7985C15.8306 36.1485 13.2809 36.8556 10.6043 36.8556C10.0458 36.8556 9.48413 36.8239 8.93441 36.761C8.66132 36.7296 8.4002 36.8855 8.3072 37.1366C8.2142 37.3878 8.31277 37.6678 8.5451 37.8118C11.9836 39.9432 15.9595 41.0697 20.0427 41.0697C28.0699 41.0697 33.0915 37.4103 35.8904 34.3404C39.3807 30.5126 41.3825 25.4459 41.3825 20.4396C41.3825 20.2305 41.3792 20.0193 41.3725 19.8088C42.7496 18.8058 43.9351 17.592 44.8999 16.1968C45.0464 15.9849 45.0306 15.7049 44.8608 15.5098C44.6912 15.3146 44.4087 15.2515 44.1675 15.3549Z" fill="url(#paint1_linear_129_18)"/>
                            <defs>
                            <filter id="filter0_b_129_18" x="-4" y="-4" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_129_18"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_129_18" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_129_18" x1="4.33333" y1="7.58333" x2="41.1667" y2="45.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D8E3FF"/>
                            <stop offset="1" stopColor="#FFF5EE" stopOpacity="0.51"/>
                            <stop offset="1" stopColor="#DDE7FF" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_129_18" x1="13.6512" y1="36.8125" x2="33.657" y2="11.5367" gradientUnits="userSpaceOnUse">
                            <stop offset="0.03" stopColor="#A98D58"/>
                            <stop offset="0.1" stopColor="#B7995F"/>
                            <stop offset="0.22" stopColor="#DDB771"/>
                            <stop offset="0.31" stopColor="#FACF7F"/>
                            <stop offset="0.5" stopColor="#FCE88C"/>
                            <stop offset="0.63" stopColor="#FDFA96"/>
                            <stop offset="0.75" stopColor="#F6E18E"/>
                            <stop offset="1" stopColor="#E6A37B"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </Stack>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Footer