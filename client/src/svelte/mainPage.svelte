<script lang="ts">

let slider:boolean = false;
</script>
<button class="click" on:click={() => slider = !slider}></button>
  <div class="slider-box"  style={"" + (slider ? "display:none":"")}>
    <section class="img-slider">
      <div class="slider-container">
        
        <div class="slide">
          <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778218/img-26_aw9alb.jpg">
        </div>
        
        <div class="slide">
          <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778117/img-23_pumtse.jpg">
        </div>
    
        <div class="slide">
          <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778109/img-20_ljchnk.jpg">
        </div>
        
      </div>
    </section>
  </div>
           
    