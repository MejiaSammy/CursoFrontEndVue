<template>
  <div class="about">
    <nav>
        <router-link to="/Cliente/homeC">Inicio</router-link> 
        <router-link to="/Cliente/aboutC">Nosotros</router-link> 
        <router-link to="/Cliente/saboresC">Sabores</router-link> 
        <router-link to="/Cliente/adornosC">Adornos</router-link> 
        <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <Ordenar msg=""/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Ordenar from '@/components/Cliente/Ordenar';

export default {
  name: 'OrdenarView',
  components:{
    Ordenar
  }  
};
</script>

<style scoped>
  
</style>