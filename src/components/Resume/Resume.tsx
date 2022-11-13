import { FC } from 'react';
import {
    Container,
    VStack,
    Heading
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Resume: FC = () => {
    return (
        <Element name='resume'>
            <Container maxW={'5xl'} p={6.75} mt={15}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Resume</Heading>
                    </Fade>
                    <Fade bottom>
                        <Container>
                            <iframe src="https://drive.google.com/file/d/1LzFSi9dW5B8Y-eSltcjgCHV0QV0XsRTE/preview" width="100%" height="480" allow="autoplay" title="Resume"></iframe>
                        </Container>
                    </Fade>
                </VStack>
            </Container>
        </Element>
    );
};

export default Resume;