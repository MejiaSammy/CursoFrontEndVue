<template>
  <div class="sabores">
    <nav>
        <router-link to="/Cliente/homeC">Inicio</router-link> 
        <router-link to="/Cliente/aboutC">Nosotros</router-link> 
        <router-link to="/Cliente/saboresC">Sabores</router-link> 
        <router-link to="/Cliente/adornosC">Adornos</router-link> 
        <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <section class="sabores" id="sabores">
    <h1 class="heading"> <span>Sabores</span> </h1>
    <div class="box-container">

        <div class="box">
            <img src="@/assets/chocolate.jpg" alt="">
            <h3>Chocolate</h3>
            <div class="price">$220 <span>$250</span></div>
            <a href="#" class="btn">Agregar</a>
        </div>

        <div class="box">
            <img src="@/assets/vainilla.jpg" alt="">
            <h3>Vainilla</h3>
            <div class="price">$200 <span>$220</span></div>
            <a href="#" class="btn">Agregar</a>
        </div>

        <div class="box">
            <img src="@/assets/fresa.jpg" alt="">
            <h3>Fresa</h3>
            <div class="price">$200 <span>$220</span></div>
            <a href="#" class="btn">Agregar</a>
        </div>

        <div class="box">
            <img src="@/assets/oreo.jpg" alt="">
            <h3>Oreo</h3>
            <div class="price">$230 <span>$260</span></div>
            <a href="#" class="btn">Agregar</a>
        </div>

        <div class="box">
            <img src="@/assets/cafe.jpg" alt="">
            <h3>Café</h3>
            <div class="price">$230 <span>$260</span></div>
            <a href="#" class="btn">Agregar</a>
        </div>

        <div class="box">
            <img src="@/assets/zanahoria.jpg" alt="">
            <h3>Zanahoria</h3>
            <div class="price">$200 <span>$220</span></div>
            <a href="#" class="btn">Agregar</a>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SaboresView',
  
}
</script>

<style scoped>
  h1,h3,.price{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .sabores .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
    
  }

  .sabores .box-container .box{
      padding:5rem;
      text-align: center;
      border:var(--border);    
  }

  .sabores .box-container .box img{
      height: 30rem;
  }

  .sabores .box-container .box h3{
      color: #fff;
      font-size: 2rem;
      padding:1rem 0;
  }

  .sabores .box-container .box .price{
      color: #fff;
      font-size: 2.5rem;
      padding:.5rem 0;
  }

  .sabores .box-container .box .price span{
      font-size: 1.5rem;
      text-decoration: line-through;
      font-weight: lighter;
  }

  .sabores .box-container .box:hover{
      background:rgba(255, 255, 255, 0.534);
  }

 
</style>
