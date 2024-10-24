import {
    FirebaseBadge,
    JavaBadge,
    MongoBadge,
    MySQLBadge,
    NodeBadge,
    PHPBadge,
    PythonBadge,
    ReactBadge,
    AssemblyBadge,
    DjangoBadge,
    TypescriptBadge,
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
   
    {
        name: 'Implied Volatility Surface',
        id: 'volatility_surface',
        type: 'Web app',
        tagline:
            'An App that plots current Implied Volatility Surface for any Ticker',
        tags: [<PythonBadge/>],
        imageSrc: '/implied_vol.jpg',
        description:
            'This app visualizes the implied volatility surface for stock options using real-time data from Yahoo Finance. It provides an interactive 3D plot to explore volatility based on strike prices and expiration dates.',
        links: [
            {
                link: 'https://volatilitysurfacer.streamlit.app',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://volatilitysurfacer.streamlit.app',
    },
    {
        name: 'Trading Bot',
        id: 'trading bot',
        type: 'Web app',
        tagline:
            'A bot that trades any ticker of your choosing using a Simple Moving Average strategy',
        tags: [<PythonBadge />],
        imageSrc: '/trading_bot.jpg',
        description:
            'A momentum strategy trading bot , using market data from Vintage API ',
        links: [
            {
                link: 'https://mytradinbot.streamlit.app',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://mytradinbot.streamlit.app',
    }


]
