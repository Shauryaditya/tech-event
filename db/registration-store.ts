import postgres from 'postgres';
export type Registration = {id:string;name:string;email:string;phone:string;institution:string;events:string;createdAt:string};
let client: ReturnType<typeof postgres> | undefined;
function database(){
 const url=process.env.DATABASE_URL || process.env.POSTGRES_URL;
 if(!url)throw new Error('Set DATABASE_URL in the server environment before accepting registrations.');
 return client ??= postgres(url,{max:1,idle_timeout:20,connect_timeout:10,prepare:false});
}
export async function saveRegistration(entry:Registration){
 const sql=database();
 await sql`INSERT INTO registrations (id,name,email,phone,institution,events,created_at) VALUES (${entry.id},${entry.name},${entry.email},${entry.phone},${entry.institution},${entry.events},${entry.createdAt})`;
}
