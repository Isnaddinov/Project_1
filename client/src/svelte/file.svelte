<script lang="ts">
    type Product = {
        id: number;
        name: string;
        desc: string;
        price: number;
        count: number;
        type_id: number;
    };
    export let all: number;
    export let product: Product;
    import Footer from "./footer.svelte";
    import Header from "./header.svelte";
</script>

<div class="basket-box">
    <div class="bas_products">
        <div class="bas_product">
            <div class="image"><img src="./img/Product1.jpg" alt="" /></div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <span>{product.price}</span>
            <button
                on:click={() => {
                    product.count--;
                    all = all - product.count * product.price;
                }}>-</button
            >
            <input type="text" value={product.count} name="number" />
            <button
                on:click={() => {
                    all = all - product.count * product.price;
                    product.count++;
                }}>+</button
            >
            {product.count * product.price}
        </div>
    </div>
</div>
