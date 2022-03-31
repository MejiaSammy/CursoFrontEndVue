<template>
  <div class="adornos">
    <section class="adornos" id="adornos">
    <h1 class="heading"> <span>Adornos</span> </h1>
    <div class="box-container">
        
        <div class="box">
            
            <div class="image">
                <img src="@/assets/cremabatida.jpg" alt="">
            </div>
            <div class="content">
                <h3>Crema Batida</h3>                
                <div class="price">$50</div>
                <a href="#" class="btn">Agregar</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/fondant.jpg" alt="">
            </div>
            <div class="content">
                <h3>Fondant</h3>                
                <div class="price">$150</div>
                <a href="#" class="btn">Agregar</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/ganache.jpg" alt="">
            </div>
            <div class="content">
                <h3>Ganache</h3>                
                <div class="price">$150</div>
                <a href="#" class="btn">Agregar</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/merengue.jpg" alt="">
            </div>
            <div class="content">
                <h3>Merengue</h3>                
                <div class="price">$100</div>
                <a href="#" class="btn">Agregar</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/creamcheese.png" alt="">
            </div>
            <div class="content">
                <h3>Queso Crema</h3>                
                <div class="price">$120</div>
                <a href="#" class="btn">Agregar</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/frutas.jpg" alt="">
            </div>
            <div class="content">
                <h3>Frutas</h3>                
                <div class="price">$130</div>
                <a href="#" class="btn">Agregar</a>
            </div>
        </div>

    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Adornos"
  
};  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,h3,.price{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .adornos .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
  }

  .adornos .box-container .box{
      text-align: center;
      border:var(--border);
      padding: 2rem;
  }

  .adornos .box-container .box .icons a{
      height: 5rem;
      width: 5rem;
      line-height: 5rem;
      font-size: 2rem;
      border:var(--border);
      color:#fff;
      margin:.3rem;
  }

  .adornos .box-container .box .icons a:hover{
      background:var(--main-color);
  }

  .adornos .box-container .box .image{
      padding: 2.5rem 0;
  }

  .adornos .box-container .box .image img{
      height: 25rem;
  }

  .adornos .box-container .box .content h3{
      color:#fff;
      font-size: 2.5rem;
  }

  .adornos .box-container .box .content .stars{
      padding: 1.5rem;
  }

  .adornos .box-container .box .content .stars i{
      font-size: 1.7rem;
      color: var(--main-color);
  }

  .adornos .box-container .box .content .price{
      color:#fff;
      font-size: 2.5rem;
  }

  .adornos .box-container .box .content .price span{
      text-decoration: line-through;
      font-weight: lighter;
      font-size: 1.5rem;
  }
  .adornos .box-container .box:hover{
      background:rgba(255, 255, 255, 0.534);
  }
</style>
