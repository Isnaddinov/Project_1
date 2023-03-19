<script lang="ts">
    import Footer from "./footer.svelte";
    import Header from "./header.svelte";
    type Product = {
        id: number;
        name: string;
        desc: string;
        price: number;
        count: number;
        type_id: number;
    };

    let products: Product[] = [
        {
            id: 1,
            name: "name",
            desc: "description",
            price: 12000,
            count: 0,
            type_id: 1,
        },
        {
            id: 1,
            name: "name",
            desc: "description",
            price: 12000,
            count: 0,
            type_id: 1,
        },
        {
            id: 1,
            name: "name",
            desc: "description",
            price: 12000,
            count: 0,
            type_id: 1,
        },
        {
            id: 1,
            name: "name",
            desc: "description",
            price: 12000,
            count: 0,
            type_id: 1,
        },
    ];
    let umumiy: number = 0;
</script>

<Header />
<div class="titles">
    <h3 class="pro-title">Tovarlar</h3>
<h3 class="or-title">Rasmiylashtirish</h3>
</div>
<div class="basket-box">
    <div class="bas_products">
        

            {#each products as product}
                        <div class="bas_product">
                           
                                <img class="image" src="./img/Product1.jpg" alt="" />
                            
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                            <span>{product.price} so'm</span>
                            <button on:click={() => { product.count--;
                                    if (product.count <= 0) { product.count = 0; umumiy = umumiy}
                                    umumiy = umumiy + product.count * product.price - ((product.count + 1) * product.price)}}>-</button>
                            <input type="text" value={product.count} name="number"/>
                            <button on:click={() => {product.count++;
                                    umumiy = umumiy + product.count * product.price - ((product.count - 1) * product.price)}}>+</button>
                           <h1> {product.count * product.price}</h1>
                        </div>
                        {/each}
                    </div>
                    <div class="order-box">
                        <h2>{umumiy}</h2>
                        <div class="order">
                            <input type="text" placeholder="Ismingiz">
                            <input type="text" placeholder="Familyangiz">
                            <input type="text" placeholder="Telefongiz">
                            <section placeholder="Viloyatingiz">
                                <option value="Xorazm">Xorazm</option>
                                <option value="Toshkent shahri">Toshkent shahri</option>
                                <option value="Qoraqolpog'izton">Qoraqolpog'izton</option>
                                <option value="Farg'ona">Farg'ona</option>
                                <option value="Surxandaryo">Surxandaryo</option>
                                <option value="Qashqadaryo">Qashqadaryo</option>
                                <option value="Namangan">Namangan</option>
                                <option value="Andijon">`Andijon`</option>
                                <option value="Xorazm">Sirdaryo</option>
                                <option value="Xorazm">Xorazm</option>
                                <option value="Xorazm">Xorazm</option>
                                <option value="Xorazm">Xorazm</option>
                            </section>
                            <input type="text" placeholder="Tumaningiz">
                            <input type="text" placeholder="Shahriniz">
                            <input type="text" placeholder="Aniq manzilingiz">
                        </div>
                    </div>
                </div>

<div class="foot"><Footer /></div>
