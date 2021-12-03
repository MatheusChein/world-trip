import { Flex, Image, Text, Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { SwiperCaroussel } from '../components/SwiperCaroussel/SwiperCaroussel' 

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex direction='column' h='100vh'>
        <Header />

        <Flex
          position='relative'
          backgroundImage="url('/Background.png')"
          bgRepeat='no-repeat'
          bgSize='cover'
          h='21rem'
          p='4.375rem 18rem'
        >
          <Flex maxW='30rem' direction='column'>
            <Text
              color='gray.200'
              fontWeight='500'
              fontSize='2.25rem'
              lineHeight='54px'
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text
              color='gray.200'
              marginTop='1.25rem'
              fontSize='1.25rem'
              lineHeight='30px'
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>

          <Image
            src='Airplane.png' 
            h='23rem' 
            w='30rem'
            position='absolute'
            right='18rem'
            bottom='-3rem'
          />
        </Flex>

        <Flex p='8rem 18rem' gridGap='12rem' align='center' justify='center'>
            <Image 
              src='Nightlife.png' 
              style={{ transition: '0.2s' }} 
              _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: '0.2s' }}
            />
            <Image 
              src='Beach.png'
              style={{ transition: '0.2s' }}
              _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: '0.2s' }}
            />
            <Image 
              src='Modern.png'
              style={{ transition: '0.2s' }}
              _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: '0.2s' }}
            />
            <Image 
              src='Classic.png'
              style={{ transition: '0.2s' }}
              _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: '0.2s' }}
            />
            <Image 
              src='More.png'
              style={{ transition: '0.2s' }}
              _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: '0.2s' }}
            />
        </Flex>

        <hr
          style={{
            width: '90px',
            border: '2px solid #47585B',
            alignSelf: 'center'
          }}
        />

        <Text
          alignSelf='center'
          textAlign='center'
          p='4rem 0'
          fontWeight='500'
          fontSize='2.25rem'
          lineHeight='54px'
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>

        <SwiperCaroussel />
      </Flex>
    </>
  )
}
