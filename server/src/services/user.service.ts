import { client } from './../routers/Prismaclient.routes';
import bcrypt from 'bcrypt'

export async function findUserById(id: number) { 
    try {
        return await client.user.findUnique({ where: { id } }) 
    } catch (error) {
    console.error('Error findUser by Id service' + error);}
}
export async function findUserByUsername(username:string) {
    try {
   return await client.user.findFirst({ where:{ username:username} })
    } 
    catch (error) {
    console.error('Error findUser by username service' + error);}
}
export async function postUser(name:string, username:string, password:string,role:string){
    const hashPassword = bcrypt.hashSync(password, 7);
    try {
      return await client.user.create({data:{name: name,username:username,password: hashPassword,role: role},})
    } catch (error) {
        console.error('Error writing user service ' + error);}
}
export async function allUsersGet(){
   try {
     return client.user.findMany()
   } catch (error) {
    console.error('Error GetAllUsers service ' + error); }
}

