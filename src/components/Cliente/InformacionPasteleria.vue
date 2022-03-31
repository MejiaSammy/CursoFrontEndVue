<template>
  <div class="info">
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
  </div>
</template>

<script>
export default {
  name: "InformacionPasteleria"
  
};  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
