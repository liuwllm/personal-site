import { Lora } from 'next/font/google';
import { Manrope } from 'next/font/google';

export const lora = Lora({
    subsets: ['latin'],
    fallback: ['ui-serif', 'system-ui']
})

export const manrope = Manrope({
    subsets: ['latin'],
    fallback: ['ui-sans-serif', 'system-ui']
})
