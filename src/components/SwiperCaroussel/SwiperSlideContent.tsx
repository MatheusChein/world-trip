import { Image, Flex, Text } from '@chakra-ui/react'

import styles from './swiperCaroussel.module.scss'

interface SwiperSlideContentProps {
  handleOnSwiper?: (swiper) => void
}
export function SwiperSlideContent({handleOnSwiper}: SwiperSlideContentProps) {
  return (
    <Flex 
      h='30rem'
      position='relative'
    >
      <Image
        src='europe.jpeg'
        zIndex='-1'
        width='100%'
        height='200%'
        position='absolute'
        top='-12rem'
        filter='brightness(0.5)'
      />
      <Flex direction='column' alignSelf='center' margin='0 auto' textAlign='center'>
        <Text 
          color='white'
          fontWeight='700'
          fontSize='2.25rem'
          lineHeight='54px'
        >
          Europa
        </Text>
        <Text
          color='white'
          fontWeight='700'
          fontSize='1.25rem'
          lineHeight='30px'
        >
          O continente mais antigo.
        </Text>
      </Flex>
    </Flex>
  )
}