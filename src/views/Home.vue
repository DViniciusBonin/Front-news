<template>
  <div class="home">
  <Menu />
   <Login />
  </div>
</template>

<script>
// @ is an alias to /src

import Login from '../components/Login'
import Menu from '../components/Menu'
export default {
  name: 'Home',
  components: {
    Login,
    Menu
  }
}
</script>
