<script lang="ts" >
    import { Router, Route, Link, link } from "svelte-navigator";
    import Login from "./login.svelte";
    import { categoriesStore, discountProductStore, typesStore } from '../storage/storeages'
    import {getCategories} from '../api/category.api'
    import {getTypesId} from '../api/type.api'
    import { getBasket } from "../api/basket.api";
    import {getProductsBySearch, getProductsByTypeId, getProductsByDiscount, basketing} from '../api/product.api'

    getCategories()
    getProductsByDiscount()

let type:boolean = false
let active: boolean = false
let register:boolean

let product:string = ''

async function searcher(){
    await getProductsBySearch(product)
}
async function basket() {
        const token = localStorage.getItem('userToken')
        await getBasket(token)
        basketing()
    }


</script>
<div class={"" + (active ? "overline" : "") }></div>
<div class="nav_top">
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
    <div class="nav_panel">
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
<div class="nav_bottom">
    <div class="others">
        <div class="search">
            <input type="text" placeholder="Tovarlarni qidirish"  bind:value={product}/>
            <Router>
                <Link to="/search"><button on:click={() => searcher()}><img src="./img/search.png" alt="" /></button></Link>
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
                <Link to="/basket" on:click={() => basket()}> <div class="basket">
                   <div class="bas"><img src="./img/basket.png" alt="" /> Savat</div>
                </div></Link>
            </Router>
        </div>
    </div>
    
        <div class="navigation">
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
  <h2>Types</h2>
  <div class="card_box">
    {#each $typesStore as type} 
        <Link to = '/products'> <button on:click={() => getProductsByTypeId(type.id)} style={"" + (type ?  "display:block": "display:none")} class="type_card">
          <img src="../img/sement.jpeg" alt=""> 
          <p>{type.name}</p>
       </button> </Link>
    {/each}
     
    </div>           
</div>
</div>
<!-- Slider -->
<div class="slider-box"  style={"" + (active ? "display:none":"")}>
    <section class={"" + (register ? "close-slider":"img-slider")}>
      <div class="slider-container">
        
         <div class="slide">
          <img src="./img/slide_1.jpg" alt="">
        </div>
        
        <div class="slide">
          <img src="./img/slide_2.jpg" alt="">
        </div>
        
       
      </div>
    </section>
  </div>
  <!-- Slider end -->

  <!-- New Products -->
  <div class="new_products">
    <h3 class="title">Yangi tovarlar</h3>
    <div class="products">
        <div class="product">
                <div class="image"><span class="new_s">Yangi</span><img src="./img/Product1.jpg" alt=""></div>
                <h2>Name</h2>
                <p>Description</p>
                <span>120000 so'm</span>
                <h3>Naqdga</h3>
                <button>Savatga tashlash</button>
        </div>
        <div class="product">
                <div class="image"><span class="new_s">Yangi</span><img src="./img/Product1.jpg" alt=""></div>
                <h2>Name</h2>
                <p>Description</p>
                <span>120000 so'm</span>
                <h3>Naqdga</h3>
                <button>Savatga tashlash</button>
        </div>
        <div class="product">
                <div class="image"><span class="new_s">Yangi</span><img src="./img/Product1.jpg" alt=""></div>
                <h2>Name</h2>
                <p>Description</p>
                <span>120000 so'm</span>
                <h3>Naqdga</h3>
                <button>Savatga tashlash</button>
        </div>
        <div class="product">
                <div class="image"><span class="new_s">Yangi</span><img src="./img/Product1.jpg" alt=""></div>
                <h2>Name</h2>
                <p>Description</p>
                <span>120000 so'm</span>
                <h3>Naqdga</h3>
                <button>Savatga tashlash</button>
        </div>
    </div>
  </div>
  <!-- New Products end -->
<!-- Categories -->
<button class="categories-box">
    <h2>Kategoirayalar</h2>
    <div class="categories">
    {#each $categoriesStore as categor}
       <Link to = '/types'>  <button on:click={() => getTypesId(categor.id)} class="category">
        <img src="../img/categor.jpg" alt="">
        <h3>{categor.name}</h3>
         </button>
        </Link>
    {/each}
    
        
    </div>
   
</button>
<!-- Categories end -->
<!--Discounts -->
<div class="new_products">
    <h3 class="discount_title">Chegirmali tovarlar</h3>
    <div class="products">
        {#each $discountProductStore as product}
            <div class="dis_product">
                <div class="image"><span class="discount_s">Chegirma</span> <span class="dis_c">-{product.discount}%</span><img src="./img/Product1.jpg" alt=""></div>
                <h2 class="dis_title">{product.name}</h2>
                <p>{product.desc}</p>
                <span class="dis_price" >{product.price -((product.discount * product.price)/ 100) } so'm <sup><del class="dis_del">{product.price} so'm</del></sup></span>
                <button>Savatga tashlash</button>
        </div>
        {/each}
        
        
    </div>
  </div>
<!--Discounts end-->

    