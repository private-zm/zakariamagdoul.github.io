import { FC } from 'react'
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Card from '../generics/Card'

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Contact me</Heading>
                    </Fade>
                    <Card maxW={'85vw'} w={'xl'} pb={8} overflow={'hidden'}>
                        <Flex textAlign={'center'}>
                            <Container w='30%'>
                                <Link href='mailto:zakaria@magdoul.fr'>
                                    <Badge colorScheme='green'>Personal</Badge>
                                    <Text textDecoration={'underline'}>
                                        zakaria@magdoul.fr
                                    </Text>
                                </Link>
                            </Container>
                            <Spacer />
                            <Container w='70%'>
                                <Link href='mailto:Zakaria.Magdoul@etu.sorbonne-universite.fr'>
                                    <Badge colorScheme='orange'>Academic</Badge>
                                    <Text textDecoration={'underline'}>
                                        Zakaria.Magdoul@etu.sorbonne-universite.fr
                                    </Text>
                                </Link>
                            </Container>
                        </Flex>
                    </Card>
                </VStack>
            </Container>
        </Element>
    )
}

export default Contact
