<template>
  <div class="about">
    <nav>
        <router-link to="/Cliente/homeC">Inicio</router-link> 
        <router-link to="/Cliente/aboutC">Nosotros</router-link> 
        <router-link to="/Cliente/saboresC">Sabores</router-link> 
        <router-link to="/Cliente/adornosC">Adornos</router-link> 
        <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <section class="ordenar" id="ordenar">
    <h1 class="heading"> <span>Ordenar</span></h1>
    <div class="row">
        <form action="">
            <h3>Personaliza tu Pedido</h3>
            <div class="inputBox">                
                <input type="text" placeholder="Nombre">
            </div>
            <div class="inputBox">              
                <input type="email" placeholder="Email">
            </div>
            <div class="inputBox">                
                <input type="number" placeholder="Teléfono">
            </div>
            <div class="inputBox">              
                <input type="number" placeholder="Número de Personas">
            </div>
            <!-- Inicio de Sabores -->
            <div class="inputBox">
                <h2>Sabores</h2>
                <div class="group">
                    <input type="checkbox" name="chocolate" id="chocolate">
                    <label for="chocolate">Chocolate</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="vainilla" id="vainilla">
                    <label for="vainilla">Vainilla</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="fresa" id="fresa">
                    <label for="fresa">Fresa</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="oreo" id="oreo">
                    <label for="oreo">Oreo</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="cafe" id="cafe">
                    <label for="cafe">Café</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="zanahoria" id="zanahoria">
                    <label for="zanahoria">Zanahoria</label>
                </div>
            </div>
            <!-- Inicio de Adornos -->
            <div class="inputBox">
                <h2>Adornos</h2>
                <div class="group">
                    <input type="checkbox" name="cremabatida" id="cremabatida">
                    <label for="cremabatida">Crema Batida</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="fondant" id="fondant">
                    <label for="fondant">Fondant</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="ganache" id="ganache">
                    <label for="ganache">Ganache</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="merengue" id="merengue">
                    <label for="merengue">Merengue</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="quesocrema" id="quesocrema">
                    <label for="quesocrema">Queso Crema</label>
                </div>
                <div class="group">
                    <input type="checkbox" name="frutas" id="frutas">
                    <label for="frutas">Frutas</label>
                </div>
            </div>
            <div class="inputBox">                
                <input type="paragraph" placeholder="Descripción General">
            </div>
            <input type="submit" value="Ordenar" class="btn">
        </form>
    </div>
</section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'OrdenarView',
  
}
</script>

<style scoped>
  h1,h2,h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(82, 78, 83, 0.596);
  }

  h2{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(82, 78, 83, 0.596);
    align-content: center;
    margin-left: 25px;
  }

  label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    padding: 10px;
    color: #fff;
  }
  .ordenar .row{
    display: flex;
    background:var(--black);
    flex-wrap: wrap;
    gap:1rem;
  }

  .ordenar .row .map{
      flex:1 1 45rem;
      width: 100%;
      object-fit: cover;
  }

  .ordenar .row form{
      flex:1 1 45rem;
      padding:5rem 2rem;
      text-align: center;
  }

  .ordenar .row form h3{
      text-transform: uppercase;
      font-size: 3rem;
      color:#fff;
      margin-top: -3rem;
  }

  .ordenar .row form .inputBox{
      display: flex;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      background:var(--bg);
      border:var(--border);
  }

  .ordenar .row form .inputBox span{
      color:#fff;
      font-size: 2rem;
      padding-left: 2rem;
  }

  .ordenar .row form .inputBox input{
      width: 100%;
      padding:2rem;
      font-size: 1.7rem;
      color:#fff;
      text-transform: none;
      background:none;
  }
</style>