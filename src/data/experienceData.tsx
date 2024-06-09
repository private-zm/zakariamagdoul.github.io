import { ExperienceData } from './types'
import addactisLogo from '../media/addactisLogo.jpeg'
import bmceLogo from '../media/bmceLogo.jpeg'
import Lorraine from '../media/LorraineLogo.jpeg'
import Completude from '../media/completude.png'

export const experienceData: ExperienceData[] = [
    {
        title: 'Capital Modeling',
        company: 'Addactis France',
        location: 'France, Paris',
        dates: 'June 2023 - Present',
        description:
            'Modeling Assets and liabilites  through the application of Financial Mathematics. Building Capital Modeling solutions (ALM, Solvency 2, ICS, SBR, etc.)',
        logoSrc: addactisLogo,
    },
    {
        title: 'Operational Risk Analyst',
        company: 'BMCE Capital',
        location: 'Casablanca, Morocco',
        dates: 'June 2023 - August 2023',
        description:
            'Application Internship : Monte Carlo simulation applied to finance , Pricing European options , Variance reduction ( Control variates , antithetic variates, importance sampling , ...) , The Black-Scholes Model',
        logoSrc: bmceLogo
    },
    {
        title: 'Research Assistant',
        company: 'Université de Lorraine',
        location: 'Nancy, France',
        dates: 'May 2022 - August 2022',
        description:
            'Led a team of 5 programmers and myself , to successfully create a program that uses Optical Character Recognition (OCR), data extraction of key points capable of classifying documents (ID cards, passports, receipts).',
        logoSrc: Lorraine ,
    },
    {
        title: 'Mathematics Tutor',
        company: 'Completude',
        location: 'Paris, France (',
        dates: 'September 2023 - Present',
        description:
            'Private courses in mathematics for students from high school senior year to Bachelor degree',
        logoSrc: Completude,
    },
]
