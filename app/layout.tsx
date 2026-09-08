import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Matrix Unbounded | Advantage Academic Centre, Kolkata',description:'Explore Matrix Unbounded, the first technology and AI event from Advantage Academic Centre in Kolkata. Discover six competitions, register your interest, and compete for amazing prizes.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
