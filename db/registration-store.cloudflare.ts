import { registrationDb } from './registration-db';
import type { Registration } from './registration-store';
export async function saveRegistration(entry:Registration){
 await registrationDb().prepare('INSERT INTO registrations (id,name,email,phone,institution,events,created_at) VALUES (?,?,?,?,?,?,?)').bind(entry.id,entry.name,entry.email,entry.phone,entry.institution,entry.events,entry.createdAt).run();
}
