import { env } from 'cloudflare:workers';
export function registrationDb(){if(!env.DB)throw new Error('Registration database unavailable');return env.DB;}
