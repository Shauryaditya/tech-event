import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Advantage Tech Arena | Technology & AI Events in Kolkata',description:'Join Advantage Academic Centre’s first technology and AI event in Kolkata. Explore six competitions, register your interest, and compete for amazing prizes.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
