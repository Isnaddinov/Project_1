<script>
     import { Router, Route, Link, link } from "svelte-navigator";
    import { getProductsByTypeId } from "../api/product.api";
    import { typesStore } from "../storage/storeages";
    import Footer from "./footer.svelte";
import Header from "./header.svelte";

</script>
<Header></Header>

<div class="types-box">

  <h1 class="types_title">Types</h1>
    {#each $typesStore as type} 
    <Link to = '/products'> <button on:click={() => getProductsByTypeId(type.id)} style={"" + (type ?  "display:block": "display:none")} class="type_card">
      <img src="../img/sement.jpeg" alt=""> 
      <p>{type.name}</p>
   </button> </Link>
{/each}
</div>

<div class="foot"><Footer></Footer></div>