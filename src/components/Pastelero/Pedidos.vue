<template>
  <div class="Pedidos">
    <section class="about" id="pedidos">
    <h1 class="heading"> <span>Pedidos</span> </h1>
        <div class="datatable-container">            
            <table class="datatable">
                <thead>
                    <tr>                                               
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>NúmPersona</th>
                        <th>Sabor</th>
                        <th>Adorno</th>
                        <th>Descripción General</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                        
                        <td>Daniel Iplikci</td>
                        <td>Danny123@gmail.com</td>
                        <td>7774125896</td>
                        <td>20</td>
                        <td>Chocolate</td>
                        <td>Fondant</td>
                        <td>Pastel de un piso, leyenda "Felicidades Mamá"</td>
                        <td>Entregado</td>
                    </tr>
                    <tr>                        
                        <td>David Iplikci</td>
                        <td>David_enano@gmail.com</td>
                        <td>5542369852</td>
                        <td>50</td>
                        <td>Vainilla</td>
                        <td>Ganache</td>
                        <td>Pastel de dos pisos, leyenda "Felicidades Papá"</td>
                        <td>Entregado</td>
                    </tr>
                    <tr>                        
                        <td>Iliana Aslan</td>
                        <td>Ili_aslan@hotmail.com</td>
                        <td>7774152896</td>
                        <td>150</td>
                        <td>Zanahoria</td>
                        <td>Queso Crema</td>
                        <td>Tres pisos, sin texto</td>
                        <td>Pendiente</td>
                    </tr>
                    <tr>                        
                        <td>Laura Korfali</td>
                        <td>Lau_kor@gmail.com</td>
                        <td>7778965423</td>
                        <td>30</td>
                        <td>Oreo</td>
                        <td>Fondant</td>
                        <td>Sin texto</td>
                        <td>Pendiente</td>
                    </tr>
                    <tr>                        
                        <td>Alejandro Dincer</td>
                        <td>AlexDincer@hotmail.com</td>
                        <td>5557742311</td>
                        <td>100</td>
                        <td>Chocolate y Vainilla</td>
                        <td>Ganache y Frutas</td>
                        <td>"Feliz Dia Enano"</td>
                        <td>Pendiente</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pedidos"
  
};  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    table{
        background-color: rgba(207, 55, 187, 0.466);
        width: 100%;
        text-align: left;
        font-family: sans-serif;
        font-size: 2rem;
    }

    th,td{
        border: solid 2px pink;
        padding: 5px;
        text-align: center;
    }

    thead{
        background-color: #47dbe0da;
        text-align: center;
    }

    tr:nth-child(even){
        background-color: rgba(221, 221, 221, 0.432);
    }
</style>
