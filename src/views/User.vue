<template>
<div>
    <Nav :msg="msgHello" :nameUser="user.nome"/>
    <Aside />
    <router-view />
    
</div>
</template>

<script>
import Nav from '../components/Nav'
import Aside from '../components/Aside'
// import EditarCadastro from '../components/EditarCadastro'
export default {
  name:"profile",
  components: {
    Nav,
    Aside,
    // EditarCadastro,
  },
  data() {
    return {
      user: {},
      msgHello: '',
    }
  },

  methods: {
    getUser() {
      const json = localStorage.getItem('user')
      this.user = JSON.parse(json)
      // console.log(this.user)
    },
    setMsgHello() {
      const now = new Date();
      let hour = now.getHours()


      if(hour >= 6 && hour <= 12 ) {
        this.msgHello = 'Bom dia! '
      }
      if(hour >= 12 && hour <= 18 ) {
        this.msgHello = 'Boa tarde! '
      }
      if(hour >= 18 || hour < 6) {
        this.msgHello = 'Boa noite! '
      }
      return this.msgHello
    }
  },
  mounted() {
    this.getUser();
    this.setMsgHello()
  }

}
</script>

<style>

</style>