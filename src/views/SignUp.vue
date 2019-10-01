<template>
  <div class="sign-up">
    <img src='../assets/logo_login.png'>
    <h1>Assinatura de Periódicos</h1>
    <h2>Novo usuário</h2>
    <input
      type="text"
      placeholder="Nome"
      v-model="nome">
    <br>
    <input
      type="text"
      placeholder="Sobrenome"
      v-model="sobrenome">
    <br>
    <input
      type="text"
      placeholder="Email"
      v-model="email">
    <br>
    <input
      type="password"
      placeholder="Senha"
      v-model="senha">

    <br><br>
    <button @click="signUp">Registrar</button>
    <span>
      Já tem uma conta ? Entre
      <router-link to="/login"> aqui.</router-link>
    </span>
  </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'signUp',
        data() {
            return {
                nome: '',
                sobrenome: '',
                email: '',
                senha: '',
            };
        },
        methods: {
            signUp() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
                    (user) => {
                        this.$router.replace('home'),
                            alert('Sua conta foi cadastrata com sucesso!')
                    },
                    (err) => {
                        alert('Aconteceu algo inesperado. ' + err.message)
                    }
                );
            },
        },
    };
</script>

<style scoped>
  .sign-up {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #1606f3;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 15px;
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
