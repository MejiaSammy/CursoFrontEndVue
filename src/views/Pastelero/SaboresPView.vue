<template>
  <div class="sabores">
    <nav>
      <router-link to="/Pastelero/homeP">Inicio</router-link> 
      <router-link to="/Pastelero/pedidosP">Pedidos</router-link> 
      <router-link to="/Pastelero/saboresP">Sabores</router-link> 
      <router-link to="/Pastelero/adornosP">Adornos</router-link>       
    </nav>
    <CantidadSabores msg=""/> 
  </div>
</template>

<script>
// @ is an alias to /src
import CantidadSabores from '@/components/Pastelero/CantidadSabores';

export default {
  name: 'SaboresView',
  components:{
    CantidadSabores
  }  
};
</script>

<style scoped>  
</style>
