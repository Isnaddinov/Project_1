<script lang="ts">
    import { Router, Route } from 'svelte-navigator'
    import App from './App.svelte';
    import Yetkazish from './svelte/yetkazish.svelte';
    import YetkazuvchiKomp from './svelte/yetkazuvchiKomp.svelte'
    import KompaniyaHaqida from './svelte/kompaniyaHaqida.svelte'
    import Kontaktar from './svelte/kontaktar.svelte'
    import Login from './svelte/login.svelte';
    import Like from './svelte/like.svelte';
    import BasketPage from './svelte/basketPage.svelte';
    import SearchPage from './svelte/searchPage.svelte';
    import ProductPage from './svelte/productPage.svelte';
    import TypesPage from './svelte/typesPage.svelte';
</script>

<Router>
    
    <Route path='/' component={App}/>
    <Route path='/yetkazish' component = {Yetkazish}/>   
    <Route path='/yetkazuvchiKomp' component = {YetkazuvchiKomp}/>   
    <Route path='/kopmaniyaHaqida' component = {KompaniyaHaqida}/>   
    <Route path='/kontaktlar' component = {Kontaktar}/>   
    <Route path='/login' component = {Login}/>   
    <Route path='/like' component = {Like}/>   
    <Route path='/basket' component = {BasketPage}/>   
    <Route path='/search' component = {SearchPage}/>   
    <Route path= '/products' component = {ProductPage}/>
    <Route path= '/types' component = {TypesPage}/>
</Router>