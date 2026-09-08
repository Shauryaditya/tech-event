import { saveRegistration } from '../../../db/registration-store';
const allowed=['Neuralysis','Hackathon','SyntaxShowdown','InfoWiz','The Copycat Blueprint','WikiThon'];
export async function POST(request:Request){
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return Response.json({error:'Please register from this website.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>10000)return Response.json({error:'Registration is too large.'},{status:413});
 let data;try{const raw=await request.text();if(raw.length>10000)return Response.json({error:'Registration is too large.'},{status:413});data=JSON.parse(raw);}catch{return Response.json({error:'Invalid registration details.'},{status:400});}
 if(!data||typeof data!=='object')return Response.json({error:'Invalid registration details.'},{status:400});
 const {name,email,phone,institution,events,consent}=data;
 if(typeof name!=='string'||!name.trim()||name.length>100||typeof email!=='string'||email.length>254||!/^\S+@\S+\.\S+$/.test(email)||typeof phone!=='string'||! /^(?:\+91[ -]?)?[6-9][0-9]{9}$/.test(phone)||typeof institution!=='string'||!institution.trim()||institution.length>150||!Array.isArray(events)||events.length<1||events.length>2||new Set(events).size!==events.length||events.some(e=>!allowed.includes(e))||consent!=='on')return Response.json({error:'Please enter valid contact details, choose one or two distinct events, and agree to registration communication.'},{status:400});
 try{const id=crypto.randomUUID();await saveRegistration({id,name:name.trim(),email:email.trim().toLowerCase(),phone,institution:institution.trim(),events:JSON.stringify([...new Set(events)]),createdAt:new Date().toISOString()});return Response.json({id},{status:201,headers:{'Cache-Control':'no-store'}});}catch{return Response.json({error:'Registration is temporarily unavailable. Please try again shortly.'},{status:503});}
}

