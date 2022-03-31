<template>
  <div class="about" id="about">
    <nav>
      <router-link to="/Cliente/homeC">Inicio</router-link> 
      <router-link to="/Cliente/aboutC">Nosotros</router-link> 
      <router-link to="/Cliente/saboresC">Sabores</router-link> 
      <router-link to="/Cliente/adornosC">Adornos</router-link> 
      <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <InformacionPasteleria msg="Conocenos"/>    
  </div>
</template>

<script>
// @ is an alias to /src
 import InformacionPasteleria from '@/components/Cliente/InformacionPasteleria';

export default {
  name: 'AboutView',
  components:{
    InformacionPasteleria
  }  
};
</script>

<style scoped>
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
