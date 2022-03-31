<template>
  <div class="cantidadAdornos">
    <section class="adornos" id="adornos">
    <h1 class="heading"> <span>Inventario Adornos</span> </h1>
    <div class="box-container">
        
        <div class="box">            
            <div class="image">
                <img src="@/assets/cremabatida.jpg" alt="">
            </div>
            <div class="content">
                <h3>Crema Batida</h3>                
                <div class="price">8</div>
                <a href="#" class="btn">Surtir</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/fondant.jpg" alt="">
            </div>
            <div class="content">
                <h3>Fondant</h3>               
                <div class="price">5</div>
                <a href="#" class="btn">Surtir</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="@/assets/ganache.jpg" alt="">
            </div>
            <div class="content">
                <h3>Ganache</h3>                
                <div class="price">4</div>
                <a href="#" class="btn">Surtir</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/merengue.jpg" alt="">
            </div>
            <div class="content">
                <h3>Merengue</h3>                
                <div class="price">12</div>
                <a href="#" class="btn">Surtir</a>
            </div>
        </div>

        <div class="box">           
            <div class="image">
                <img src="@/assets/creamcheese.png" alt="">
            </div>
            <div class="content">
                <h3>Queso Crema</h3>
                <div class="price">11</div>
                <a href="#" class="btn">Surtir</a>
            </div>
        </div>

        <div class="box">            
            <div class="image">
                <img src="@/assets/frutas.jpg" alt="">
            </div>
            <div class="content">
                <h3>Frutas</h3>
                <div class="price">4</div>
                <a href="#" class="btn">Surtir</a>
            </div>
        </div>

    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CantidadAdornos"
  
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
      padding:5rem;
      text-align: center;
      border:var(--border);    
  }

  .adornos .box-container .box img{
      height: 30rem;
  }

  .adornos .box-container .box h3{
      color: #fff;
      font-size: 2rem;
      padding:1rem 0;
  }

  .adornos .box-container .box .price{
      color: #fff;
      font-size: 2.5rem;
      padding:.5rem 0;
  }

  .adornos .box-container .box .price span{
      font-size: 1.5rem;
      text-decoration: line-through;
      font-weight: lighter;
  }

  .adornos .box-container .box:hover{
      background:rgba(226, 130, 194, 0.726);
  }

  .adornos .box-container .box:hover > *{
      color:var(--black);
  }
</style>
