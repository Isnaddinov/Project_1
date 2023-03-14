<script lang="ts">
    import { Router,  Link  } from "svelte-navigator";
</script>
<!-- Footer -->
<footer>
    <div class="footer-top">
    <Router>
        <div class="f_info">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, labore neque dolores error quasi repellat est numquam. Ipsam soluta quaerat voluptatem. Ex ullam blanditiis natus dolor aliquam nobis perferendis ducimus.</p>
        </div>
        <ul class="company">
            <h2>Kompaniya</h2>
            <li>Rekvizitlar</li>
            <Link to="/kontaktlar"><li>Kontaktlar</li></Link> 
            <li>Izohlar</li>
        </ul>
        <ul>
            <h2>Informatsiya</h2>
            <Link to="/yetkazish"> <li>Yetkazish va To'lov</li></Link>
                <Link to="/kopmaniyaHaqida" ><li>Kompaniya haqida</li></Link>
        </ul>
        <ul>
            <h2>Ijtimoiy tarmoqlarda biz</h2>
          <li>  <a href="https://t.me/Isnaddinovdev">
            <img src="../img/telegram.png" alt="" />TELEGRAM</a></li>
        <li><a href="https://t.me/Isnaddinovdev">
            <img src="../img/instagram.png" alt="" />INSTAGRAM</a></li>
        </ul>

        <ul>
            <h2 class="kontakt_ul">Kontaktlar</h2>
            
            <li class="contact_item"><svg
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
            <p>+99890-429-01-07</p></li>
            <li ><p class="li_p">Ish vaqtimiz ish hafta kunlari: <br> Soat 10:00 dan 20:00 gacha</p></li>
            <li class="gps_item"> <a href="https://goo.gl/maps/6LzB3fKKGouJMCWy7    "> <span class="gps_icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" >
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg></span><p class="gps_p">Bizning joylashgan manzilimiz: <br> Urgacnh shahar Darital s.m</p></a></li>
        </ul>
    </Router>
</div>
<span class="copyright_sign">© <p>Xoztovar.uz, 2023 y Barcha huqular himoyalangan</p></span>
</footer>
<!-- Footer end-->