<template>
  <div class="about" id="about">
    <nav>
      <router-link to="/Cliente/homeC">Inicio</router-link> 
      <router-link to="/Cliente/aboutC">Nosotros</router-link> 
      <router-link to="/Cliente/saboresC">Sabores</router-link> 
      <router-link to="/Cliente/adornosC">Adornos</router-link> 
      <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <div class="row">
        <div class="image">
            <img src="@/assets/logo.png" alt="">
        </div>

        <div class="content">
            <h3>Tu pastel para toda ocasión</h3>            
            <h2 class="fas fa-location-arrow"> Dirección: Ave. Rio Mayo Cuernavaca, Morelos</h2>
            <h2 class="fas fa-phone"> Teléfonos: 7778455213</h2>
            <h2 class="fas fa-clock"> Horario: Lunes a Viernes de 8-18 hrs</h2>                
        </div>
    </div>
    <Nosotros msg="Conocenos"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  
}
</script>

<style scoped>
  .about .row{
      display: flex;
      align-items: center;
      background:var(--black);
      flex-wrap: wrap;
      margin-top: 55px;
  }

  .about .row .image{
      flex:1 1 45rem;
      margin-left: 5rem;
  }

  .about .row .image img{
      width: 85%;
  }
  .about .row .content{
      flex:1 1 45rem;
      padding:2rem;
  }

  .about .row .content h3{
      font-size: 3rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color:deeppink;
  }

  .about .row .content p{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1.6rem;
      color:#ccc;
      padding:1rem 0;
      line-height: 1.8;
  }

  h2{
      margin: 16px 0;
      padding-left: 16px;
      padding-bottom: 10px;
      color: #fff;
      font-size: 2rem;
      font-family: sans-serif;
  }

  nav {
    background: rgba(210, 80, 243, 0.651);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1.5rem 10%;
    border-bottom: var(--border);
    position: fixed;
    top:0; left: 0; right: 0;
    z-index: 1000;
  }

  nav a {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin:0 1rem;
    font-size: 2rem;
    color:#fff;  
  }

   nav a.router-link {
    color: #45bba7;
   }
</style>
