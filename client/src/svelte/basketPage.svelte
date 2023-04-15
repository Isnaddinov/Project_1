<script lang="ts">
    import { postOrder } from "../api/order.api";
    import { saveItems } from "../api/product.api";
    import { basketStorage, getBasketProductsStorage } from "../storage/storeages";
import Footer from "./footer.svelte";
    import Header from "./header.svelte";
   
    let minus:boolean
    let name: string
    let surname: string
    let phone:string 
    let viloyat:string
    let tuman: string
    let shahar: string
    let aniq_adress: string 
    let umumiy: number = 0;
</script>

<Header />
<div class="titles">
    <h3 class="pro-title">Tovarlar</h3>
   {#each $basketStorage as basket}
   <h2 class="bas_name">Assalomu Alaykum {basket.name} !</h2>
      {/each}  
<h3 class="or-title">Rasmiylashtirish</h3>
</div>
<div class="basket-box">
    <div class="bas_products">

        {#if $getBasketProductsStorage.length === 0}
        <h2 class="alert_bas">Tovarlarni tanlang !</h2>
        {/if}
            {#each $getBasketProductsStorage as product}
                        <div class="bas_product">
                           
                                <img class="image" src="./img/Product1.jpg" alt="" />
                            
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                            <span>{product.price} so'm</span>
                            <button on:click={() => { product.count--;
                                    if (product.count <= 0) { product.count = 0; umumiy = umumiy ; minus = false}
                                    umumiy = umumiy + product.count * product.price - ((product.count + 1) * product.price)}}><img class="pluser" src="../img/minus.png" alt="minus" style={"" + (minus ? "display:flex" : "display:none")}/><h4 class={"" + (minus ? "none" : "offplus")}> </h4></button>
                            <input type="text" value={product.count} name="number"/> 
                            <button on:click={() => {product.count++; 
                                    if(product.count > 0){minus = true}
                                    umumiy = umumiy + product.count * product.price - ((product.count - 1) * product.price)}}><img class="pluser" src="../img/plus.png" alt="plus"/></button>
                           <h1> {product.count * product.price}</h1>
                        </div>
                        {/each}
                    </div>
                    <div class="order-box">
                        <h2> Umumiy narx : {umumiy} so'm</h2>
                        <div class="order">
                            <input bind:value={name} type="text" placeholder="Ismingiz">
                            <input bind:value={surname} type="text" placeholder="Familyangiz">
                            <input bind:value={phone} type="text" placeholder="Telefongiz">
                            <select bind:value={viloyat} placeholder="Viloyatingiz" >
                                <option value="">Viloyatni tanlang</option>
                                <option value="Xorazm">Xorazm</option>
                                <option value="Toshkent shahri">Toshkent shahri</option>
                                <option value="Qoraqolpog'izton">Qoraqolpog'izton</option>
                                <option value="Farg'ona">Farg'ona</option>
                                <option value="Surxandaryo">Surxandaryo</option>
                                <option value="Qashqadaryo">Qashqadaryo</option>
                                <option value="Namangan">Namangan</option>
                                <option value="Andijon">Andijon</option>
                                <option value="Toshken vil.">Toshken vil.</option>
                                <option value="Jizzax">Jizzax</option>
                                <option value="Samarqand">Samarqand</option>
                                <option value="Buxoro">Buxoro</option>
                            </select>
                            <input bind:value={tuman} type="text" placeholder="Tumaningiz">
                            <input bind:value={shahar} type="text" placeholder="Shahriniz">
                            <input bind:value={aniq_adress} class="aniq_man" type="text" placeholder="Aniq manzilingiz">
                        <div class="order_btns">
                            <button on:click={() => {postOrder(name, surname, phone, viloyat, tuman, shahar, aniq_adress, umumiy), saveItems()}} class="order_btn_saq">Saqlash</button>
                            <button class="order_btn_sot">Sotib olish</button>
                         </div>    
                        </div>
                    </div>
                </div>

<div class="foot"><Footer /></div>
