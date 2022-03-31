<template>
  <div class="adornos">
    <nav>
      <router-link to="/Pastelero/homeP">Inicio</router-link> 
      <router-link to="/Pastelero/pedidosP">Pedidos</router-link> 
      <router-link to="/Pastelero/saboresP">Sabores</router-link> 
      <router-link to="/Pastelero/adornosP">Adornos</router-link>       
    </nav>
    <CantidadAdornos msg=""/> 
  </div>
</template>

<script>
// @ is an alias to /src
import CantidadAdornos from '@/components/Pastelero/CantidadAdornos';

export default {
  name: 'AdornosView',
  components:{
    CantidadAdornos
  }  
};
</script>

<style scoped>
 
</style>