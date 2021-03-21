<template>
    <nav class="bg ">
        <div class="msg-apresent bg-2 ">
        {{msg}} {{nameUser}}
        </div>
        <div class="direita">
            <button @click= "logout" class="button is-danger is-outlined ">Logout</button>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'Nav',

    data() {
        return{

        }
    },
    props:{
        msg: String,
        nameUser: String

    },

    methods: {
        logout: function() {
            localStorage.removeItem('user')

            this.$router.push('/')
        }
    }

}
</script>

<style scoped>
    .alig-end {
        float: right;
        overflow: auto;
        width: auto;
    }
    .larg {
        max-width: 600px;
    }
   .bg {
       /* background: yellow; */
       overflow: auto;
       display: flex;
       justify-content: center;
       padding: 0.7rem;
       background: rgb(53, 53, 53);
       color: rgb(217, 217, 217);
   }
   

   .msg-apresent {
      float: left;
      width: 70%;
      margin: 0 auto;
   }

   .direita {
       /* background: green; */
       float: right;
       display: block;
       margin: 0 auto;
   }

  
</style>