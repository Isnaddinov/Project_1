<script lang="ts">
    import { Router } from "svelte-navigator";


    export let close:boolean = false
    let getLogin:boolean = false
   export let closer:() => void
   function clicker (){
    closer()
    getLogin = false
   }
</script>
<div class="login-container" style={"" + (close ? "display:flex" : "display:none")}>
    <Router>
    <div class="register-box" style={"" + (getLogin ? "display:none" : "display:flex")} >
    
        <div class="register">
            <h2>Registration</h2>
            <input type="text" class="name" placeholder="name">
            <input type="text" class="username" placeholder="username">
            <input type="text" class="password" placeholder="password">
            <div class="btn">
                <button class="register_btn"on:click={() => clicker() } >Registration</button> 
                <button class="login_btn" on:click={() => getLogin = true }>Login</button>
            </div>
        </div>
        </div>
        <div class="login-box" style={"" + (getLogin ? "display:flex" : "display:none")}>
            <div class="login_account">
                <h2>Login</h2>
                <input type="text" class="username" placeholder="username">
                <input type="text" class="password" placeholder="password">
                <div class="btn">
                    <button class="login_btn" on:click={() => clicker() }>Login</button>
                    <button class="close_btn" on:click={() => clicker() }>Close</button>
                </div>
            </div>
            
    </div>
</Router>
    </div>
        