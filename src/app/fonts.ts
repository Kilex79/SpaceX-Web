import { Lusitana, Montserrat, Oxanium } from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin']})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const oxanium = Oxanium({subsets: ['latin'],
    weight: ['400']
})