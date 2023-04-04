<script lang="ts">
    import { Router } from "svelte-navigator";
    import { loginUser, registerUser } from "../api/user.api";

    let getLogin:boolean = false
    export let close:boolean = false
    export let closer:() => void

    let name: string = ''
    let username: string = ''
    let password: string = ''
    let user_name:string = ''
    let pas_sword:string = ''
  
    async function register() {
        await registerUser(name, username, password)
    }

   function clicker (){
    closer()
    getLogin = false
   }

async function login() {
    const data = await loginUser(user_name, pas_sword)
    localStorage.setItem('userToken', data.token)
}
</script>
<div class="login-container" style={"" + (close ? "display:flex" : "display:none")}>
    <Router>
    <div class="register-box" style={"" + (getLogin ? "display:none" : "display:flex")} >
    
        <div class="register">
            <h2>Registration</h2>
            <input type="text" class="name" placeholder="name"   bind:value={name}>
            <input type="text" class="username" placeholder="username" bind:value={username}>
            <input type="text" class="password" placeholder="password" bind:value={password}>
            <div class="btn">
                <button class="register_btn" on:click={() => {register(), clicker()}  } >Registration</button> 
                <button class="login_btn" on:click={() => getLogin = true }>Login</button>
            </div>
        </div>
        </div>
        <div class="login-box" style={"" + (getLogin ? "display:flex" : "display:none")}>
            <div class="login_account">
                <h2>Login</h2>
                <input type="text" class="username" placeholder="username" bind:value={user_name}>
                <input type="text" class="password" placeholder="password" bind:value={pas_sword}>
                <div class="btn">
                    <button class="login_btn" on:click={() => {login(), clicker()} }>Login</button>
                    <button class="close_btn" on:click={() => clicker() }>Close</button>
                </div>
            </div>
            
    </div>
</Router>
    </div>
        