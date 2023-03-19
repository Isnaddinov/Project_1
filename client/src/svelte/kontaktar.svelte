<script>
    import Footer from "./footer.svelte";
import Header from "./header.svelte";

</script>
<Header></Header>
<div class="kontakt_info">
    <h2>TELEFON</h2>
    <div class="tel">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="icon">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
    </svg>
    <p>+99890-429-01-07</p>
    </div>
            <h2>IJTIMOIY TARMOQLAR</h2>
    <div class="sotset">
        <a href="https://t.me/Isnaddinovdev"><img src="../img/telegram.png" alt="" /><span>TELEGRAM</span></a> 
        <a href="https://t.me/Isnaddinovdev"><img src="../img/instagram.png" alt="" /><span>INSTAGRAM</span></a>
    </div>
       <h2>ISH VAQTI</h2>
        <div class="vaqt">
            <p>Sotuv bo'limi: Du-Ju с 10:00 dan 17:00 <br>
                Omborxona: Du-Ju с 08:00 dan 17:00</p>
        </div>

        <h2>MANZIL</h2>
        <p class="map_addres">Xorazm viloyati Urganch shahar Darital savdo majmuasi. </p>
        <div class="map_info" style="position:relative;overflow:hidden;">
            <a href="https://yandex.uz/maps/org/data_learning_centre/229689473868/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Data Learning Centre</a>
            <a href="https://yandex.uz/maps/21105/urgench/category/educational_institution/184106166/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Учебный комбинат в Ургенче</a>
            <iframe src="https://yandex.uz/map-widget/v1/?ll=60.607892%2C41.559961&mode=poi&poi%5Bpoint%5D=60.607718%2C41.559621&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D229689473868&z=19" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
    </div>        
       
</div>

<div class="foot"><Footer></Footer></div>
