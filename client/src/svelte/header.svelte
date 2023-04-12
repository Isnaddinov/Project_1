<script lang="ts" >
    import { Router, Route, Link, link } from "svelte-navigator";
    import Login from "./login.svelte";
    import {categoriesStore, typesStore} from '../storage/storeages'
    import {getCategories} from '../api/category.api'
    import {getTypesId} from '../api/type.api'
    import {getProductsByTypeId, getProductsBySearch, basketing} from '../api/product.api'
    import { getBasket } from "../api/basket.api";

let product:string = ''

    getCategories()
    
    async function find(){
      await  getProductsBySearch(product)
    }
    async function basket() {
        const token = localStorage.getItem('userToken')
        await getBasket(token)
        basketing()
    }

let type:boolean = false
let active: boolean = false
let register:boolean

</script>
    <div class="nav_alert"><p>Eng kam buyurtma summasi 50.000 so'm</p></div>
    <div class="container_h">
        <div class={"" + (active ? "overline" : "") }></div>
        <div class="nav_top_h">
            <div class="nav_info">
                <div class="logo">
                    <img
                        class="logo_img"
                        src="../img/Zafarbek-1.png"
                        alt="logo_img"
                    />
                    <h1>
                        XOZTOVAR.<span class="span1">UZ</span> <br />
                        <span class="span2">Xoztovarlar internet do'koni</span>
                    </h1>
                </div>
                <ul class="nav_items">
                    <Router>
                        <Link to="/yetkazish">
                            <li>Yetkazish va To'lov</li></Link
                        >
                        <Link to="/yetkazuvchiKomp"
                            ><li class="li_yet">Yetkazuvchi Kompaniyalar</li></Link
                        >
                        <Link to="/kontaktlar"><li>Kontaktlar</li></Link>
                        <Link to="/kopmaniyaHaqida"
                            ><li>Kompaniya haqida</li></Link
                        >
                    </Router>
                </ul>
            </div>
            <div class="nav_panel_h">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="icon"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                </svg>
                <p>+99890-429-01-07</p>
                <a href="https://t.me/Isnaddinovdev"
                    ><img src="../img/telegram.png" alt="" /> </a
                >
                <a href="https://t.me/Isnaddinovdev"
                    ><img src="../img/instagram.png" alt="" /></a
                >
            </div>
        </div>
        <div class="nav_bottom_h">
            <div class="others">
                <div class="search">
                    <Router>
                        <input type="text" placeholder="Tovarlarni qidirish" bind:value={product}/>

                        <button on:click={ () => find()}><Link to="/search"><img src="./img/search.png" alt="" /></Link></button>
                    </Router>
                </div>
                <div class="controllers">
                    <Router>
                        <button class="login" on:click={() => register = true}>
                            <img src="./img/login.png" alt="" />
                        </button>
                        <Login close = {register} closer = {() => register = false} ></Login>
                        <div class="like">
                            <Link to="/like"
                                ><img src="./img/heart.png" alt="" /></Link
                            >
                        </div>
                        <Link to="/basket" on:click={() => basket()}><div class="basket">
                            <img src="./img/basket.png" alt="" /> Savat
                        </div></Link>
                    </Router>
                </div>
            </div>
            
                <div class="navigation_h">
                        <h2 >CATEGORIES </h2>  
                    <button class = {"" + (active ? "active-icon" : "menu-icon") }   on:click="{() => active = !active}">
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                </div>
        </div>
        <div class="nav_bar">
            <ul class="nav_ul"  style={"" + (active ? "display:flex" : "display:none")}>
                {#each $categoriesStore as categor}
        <li class="list"><span class="title" on:mousemove={() =>{ type = true, getTypesId(categor.id)}}>{categor.name}</li>  
        {/each}
        </ul>
        <div class="type_nav" style={"" + (active ? "display:flex": "display:none")} >
          <h2>Categor name</h2>
          <div class="card_box">

              {#each $typesStore as type} 
        <Link to = '/products'> <button on:click={() => {getProductsByTypeId(type.id),   active = !active}} style={"" + (type ?  "display:block": "display:none")} class="type_card">
          <img src="../img/sement.jpeg" alt=""> 
          <p>{type.name}</p>
       </button> </Link>
    {/each}
            </div>           
        </div>
        </div>
        
    </div>


