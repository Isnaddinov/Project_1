<script>
    import Footer from "./footer.svelte";
import Header from "./header.svelte";
import {searchProductStore} from '../storage/storeages'

</script>
<Header></Header>
<div class="products-box">
        <div class="products-box">
                <h3 class="title">Tovarlar</h3>
                <div class="products">
                   {#each $searchProductStore as product}
                    <div class="product">
                            <div class="image"><img src="./img/Product1.jpg" alt=""></div>
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                            <span>{product.price} so'm</span>
                            <button>Savatga tashlash</button>
                            
                    </div>
                    {/each}
                </div>
              </div>
    </div>


<div class="foot"><Footer/></div>