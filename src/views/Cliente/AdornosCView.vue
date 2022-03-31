<template>
  <div class="adornos">
    <nav>
        <router-link to="/Cliente/homeC">Inicio</router-link> 
        <router-link to="/Cliente/aboutC">Nosotros</router-link> 
        <router-link to="/Cliente/saboresC">Sabores</router-link> 
        <router-link to="/Cliente/adornosC">Adornos</router-link> 
        <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <Adornos msg=""/>    
  </div>
</template>

<script>
// @ is an alias to /src
import Adornos from '@/components/Cliente/Adornos';

export default {
  name: 'AdornosView',
  components:{
    Adornos
  }  
};
</script>

<style scoped>
  
</style>
