<template>
  <div class="sabores">
    <nav>
        <router-link to="/Cliente/homeC">Inicio</router-link> 
        <router-link to="/Cliente/aboutC">Nosotros</router-link> 
        <router-link to="/Cliente/saboresC">Sabores</router-link> 
        <router-link to="/Cliente/adornosC">Adornos</router-link> 
        <router-link to="/Cliente/ordenarC">Ordenar</router-link> 
    </nav>
    <Sabores msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
    import Sabores from '@/components/Cliente/Sabores';

export default {
  name: 'SaboresView',
  components:{
    Sabores
  }  
};
</script>

<style scoped>

</style>
