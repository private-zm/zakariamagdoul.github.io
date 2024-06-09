import { FC } from 'react'
import {
    Container,
    VStack,
    Stack,
    Heading,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    SiPandas,
    SiPython,

    SiVisualstudiocode,
    SiGit,
    SiLatex,

    SiNumpy,
    SiCplusplus,

} from 'react-icons/si'
import { FaChartLine, FaCalculator , FaPython, FaRobot  , FaMicroscope} from 'react-icons/fa'; 
import { GiStairsGoal ,
    GiPanda, 
    GiDiceSixFacesSix,
    GiHistogram,
    GiWaveCrest,
    GiSandsOfTime,
} from 'react-icons/gi';
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import SkillSection from './SkillSection'
import SkillItem from './SkillItem'
import Card from '../generics/Card'

const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.5} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Skills</Heading>
                    </Fade>
                    <Stack direction={'row'}>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Languages'}>
                                    <SkillItem icon={SiPython} name='Python' />
                                    <SkillItem icon={SiPandas} name='Panda' />
                                    <SkillItem icon={SiNumpy} name='Numpy' />
                                    <SkillItem icon={FaMicroscope} name='Scipy' />
                                    <SkillItem icon={FaRobot} name='Scikit-Learn' />
                                    <SkillItem icon={SiCplusplus} name='C++' />
                                    
                                </SkillSection>
                                <SkillSection title={'Quantitative Sciences'}>
                                    <SkillItem icon={FaChartLine} name='Stochastic Calculus ' />
                                    <SkillItem
                                        icon={GiDiceSixFacesSix}
                                        name='Advanced Probability'
                                    />
                                    <SkillItem
                                        icon={GiHistogram}
                                        name='Advanced Statistics'
                                    />
                                    <SkillItem
                                        icon={FaCalculator}
                                        name='PDEs'
                                    />
                                    <SkillItem
                                        icon={FaRobot}
                                        name='Machine Learning'
                                    />
                                    <SkillItem
                                        icon={FaChartLine}
                                        name='Time Series'
                                    />
                                </SkillSection>
                            </Stack>
                        </Card>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Languages'}>
                                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 English : Fluent <br />
                                    🇫🇷 French : Bilangual <br />
                                    🇲🇦 Arabic : Bilangual <br />
                                    🇯🇵 Japanese : Elementary <br />

                                   
                                </SkillSection>
                                <SkillSection title={'Other tools'}>
                                    <SkillItem icon={SiGit} name='Git' />
                                    <SkillItem icon={SiLatex} name='LaTeX' />
                                    <SkillItem
                                        icon={SiVisualstudiocode}
                                        name='VS Code'
                                    />
                                 
                                </SkillSection>
                            </Stack>
                        </Card>
                    </Stack> 
                </VStack>
            </Container>
        </Element>
    )
}

export default Skills
