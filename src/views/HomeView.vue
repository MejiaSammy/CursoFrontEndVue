<template>
  <div class="home">
    <nav>
      <router-link to="/">Inicio</router-link> 
      <router-link to="/Cliente/homeC">Cliente</router-link> 
      <router-link to="/Pastelero/homeP">Pastelero</router-link>
    </nav>    
    <div class="content">
        <h3>Endulza tus momentos</h3>
        <p>Conoce nuestros diferentes pasteles</p>
        <!-- <a href="#" class="btn">Ver más</a> -->
    </div>
        <!-- Se agrega el componente 
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    </div>    
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  
}
</script>

<style scoped>
.home{
    min-height: 100vh;
    display: flex;
    align-items: center;
    background:url(https://img.besthqwallpapers.com/Uploads/24-12-2018/75680/cake-with-chocolate-cream-fruit-cheesecake-berries-sweets-cakes.jpg) no-repeat;    
    background-size: cover;
    background-position: center;    
    margin-top: -10px;
}

p{
    color: #fff;
}

.home .content{
    max-width: 60rem;
    margin-left: 5rem;
    margin-top: -10rem;
}

.home .content h3{
    font-size: 6rem;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:#fff;
}

.home .content p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    font-weight: italic;
    line-height: 1.8;
    padding:0rem 0;
    color:#eee;
    
}

btn{
    margin-top: 1rem;
    display: inline-block;
    padding:.9rem 3rem;
    font-size: 1.7rem;
    color:#fff;
    background: var(--main-color);
    cursor: pointer;
}

.btn:hover{
    letter-spacing: .2rem;
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

