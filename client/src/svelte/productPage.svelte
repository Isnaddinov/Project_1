<script>
    import { getProductsById } from "../api/product.api";
    import { productsStore } from "../storage/storeages";
import Footer from "./footer.svelte";
import Header from "./header.svelte";


</script>

<Header></Header>

<div class="products-box">
    <h3 class="title">Tovarlar</h3>
    <div class="products">
      {#if $productsStore.length === 0}
        <h1>No Product</h1>
      {/if}
       {#each $productsStore as product}
        <div class="product">
                
                <div class="image"><img src="./img/Product1.jpg" alt=""></div>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <span>{product.price} so'm</span>
                <button on:click={() => getProductsById(product.id)}>Savatga tashlash</button>
                
        </div>
        {/each}
    </div>
  </div>

<div class="foot"><Footer></Footer></div>
