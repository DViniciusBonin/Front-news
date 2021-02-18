<template>
    <div class='auth'>
    <h2> Login </h2>
       <article class="message is-danger" v-show="msgLogin">
        <div class="message-header">
            <p>Email ou senha incorretos!</p>
            <button @click="closeDanger" class="delete" aria-label="delete"></button>
        </div>
        </article>
      <div class="field mt-2">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model='email'>
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model='password'>
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
           <small class="m-2"><router-link to="/esqueci-senha">Esqueci minha senha </router-link></small> 
          <button @click='login' class="button is-success mt-2">Entrar</button>
          
       
    </div>  

    <div>
        <hr>
        <strong>Não possui cadastro ?</strong>
        <br>

        <button @click='showModal' class="button is-success mt-2 is-justify-content-center">Cadastre-se aqui</button>
       
        <div class="modal" id="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
           
            <header class="modal-card-head">

             <div class="msgStore" v-show="showMsgStore"> Cadastro Realizado!</div>
             <div class="msgErroStore" v-show="msgErroStore"> Erro ao Cadastrar!</div>
            <p class="modal-card-title">Cadastro de Usuários:</p>
            <button @click="closeModal" id="close" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body ">
                <label class="is-flex"> Nome:</label>
                <input class="input is-primary m-2" type="text" placeholder="Nome" v-model="user.nome" required>
                <label class="is-flex m-1"> Email:</label>
                <input class="input is-primary m-2" type="email" placeholder="email" v-model="user.email" required>
                <label class="is-flex m-1"> Data Nascimento:</label>
                <input class="input is-primary m-2" type="text" placeholder="Data de Nascimento" v-model="user.datanascimento" required>
                <label class="is-flex m-1"> CPF:</label>
                <input class="input is-primary m-2" type="text" placeholder="Cpf" v-model="user.cpf" required>
                <label class="is-flex m-1"> CEP:</label>
                <input class="input is-primary m-2" type="text" placeholder="CEP" v-model="user.cep" required>
                <label class="is-flex m-1"> Rua:</label>
                <input class="input is-primary m-2" type="text" placeholder="Rua" v-model="user.rua" required>
                <label class="is-flex m-1"> Numero:</label>
                <input class="input is-primary m-2" type="text" placeholder="Rua" v-model="user.numero" required>
                <label class="is-flex m-1"> Bairro:</label>
                <input class="input is-primary m-2" type="text" placeholder="Bairro" v-model="user.bairro" required>
                <label class="is-flex m-1"> Cidade:</label>
                <input class="input is-primary m-2" type="text" placeholder="Cidade" v-model="user.cidade" required>
                <label class="is-flex m-1"> Estado:</label>
                <input class="input is-primary m-2" type="text" placeholder="Estado" v-model="user.estado" required>

                <label class="is-flex m-1"> Senha:</label>
                <input class="input is-primary m-2" type="password" placeholder="Senha" v-model="senha" required>
                <label class="is-flex m-1"> Confirme sua senha:</label>
                <input class="input is-primary m-2" type="password" placeholder="Confirme sua senha" v-model="confirmSenha" required>
            </section>
            <footer class="modal-card-foot">
            <button @click="storeUser" class="button is-success">Cadastrar</button>
            <button class="button" @click="closeModal">Cancelar</button>
            </footer>
        </div>
        </div>

    </div>    

    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '../../global'
export default {
    data() {
    return {
      password: '',
      email: '',
      msgLogin: false,
      user: {
        //   nome: '',
        //   email: '',
        //   datanascimento: '',
        //   cpf: '',
        //   cep: '',
        //   rua: '',
        //   numero: '',
        //   bairro: '',
        //   cidade: '',
        //   estado: '',
        //   password: '',
      },
      senha:'',
      confirmSenha: '',
      showMsgStore: false,
      msgErroStore: false,

    }
  },
    methods: {
        login: function() {
            this.msgLogin = false
            axios.post(`${baseApiUrl}/login`, {email:this.email, password:this.password})
                .then((response) => {
                    // console.log(response.data)
                    localStorage.setItem('user', JSON.stringify(response.data))
                    // console.log(localStorage.user)
                    this.$router.push('/my-profile')

                }).catch((error => {
                    console.log(error.response.data)
                    this.msgLogin = true
                })) 

        },


        closeDanger: function() {
            this.msgLogin = false
        },
        showModal: function() {

            let modal = document.getElementById('modal') 
            modal.className = 'modal is-active'


        },

        closeModal: function() {
             let modal = document.getElementById('modal') 
            modal.className = 'modal'
        },


        getAddress: function() {
            if(this.user.cep.length == 9) {
                 axios.get(`https://viacep.com.br/ws/${this.user.cep}/json/`)
                .then((response => {
                    console.log(response.data)
                }))

            }
            
           
        },

        storeUser:function() {
            if(this.senha === this.confirmSenha) {
                this.user.password = this.senha
            }
            console.log(this.user)
            axios.post(`${baseApiUrl}/user`, this.user)
                .then(() => {
                    this.showMsgStore = true
                    this.$router.push('/')
                }).catch((error) => {
                    console.log(error)
                    this.msgErroStore = true
                })
        }

    },
     
  mounted() {
     this.getAddress();
  }

}


</script>

<style scoped>
    h2 {

        font-size: 2rem;
    }
    .auth {
        max-width: 800px;
        margin: 8rem auto;
        padding: 3rem;
        
    }

    .msgStore {
        background: green;
        color: white;
        font-size: 2rem;
        border-radius: 5px;
    }
    .msgErroStore {
        background: red;
        color: white;
        font-size: 2rem;
        border-radius: 5px;
    }


</style>