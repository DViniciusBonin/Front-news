<template>

  <aside>
      <ul> 
                
          <a><router-link to="/my-profile/editar-user" class="clean-format">Editar cadastro</router-link></a>
          <a> <router-link to="" class="clean-format">Ver Depois</router-link></a>
         
      </ul>
          
  </aside>

</template>
  

<script>
export default {
    

}
</script>

<style>

aside {
    float: left;
    background: rgb(40, 75, 99);
    height: 100vh;

    
}

aside ul {
    margin: 2rem auto;
    
    width: 100%;
}

aside ul li {
    width: 100%;
}
a {
    display: block;
    padding: 0 1rem;
}



.clean-format {

    text-decoration: none;
    color: black;
}

.clean-format:hover {

    
    color: white;
    
}

</style>