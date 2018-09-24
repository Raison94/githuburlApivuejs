<template>
    <v-app>
        <br>
        <v-flex xs7>
        <h1>User Details</h1><br>
        <v-container fluid>
             <v-btn class="blue" dark="" @click="back"><v-icon>arrow_back</v-icon> Go Back</v-btn>
                <h3><span>Id->{{user.id}}</span></h3>
                <br>                                
                <h3><span>Login->{{user.login}}</span></h3>
                <br>
                 <h3><span>HtmUrl->{{user.html_url}}</span></h3>
                 <br>
                 <h3><span>Id e Userit nga tabela->{{this.$route.params.id}}</span></h3>
                 <br>
                 <h3><span>Logini i Userit nga tabela->{{this.$route.params.name}}</span></h3>
                 <br>
                 <h3><span>Html_url e Userit nga tabela->{{this.$route.params.html_url}}</span></h3>
                 <br>
                 

               <v-avatar  :size="avatarSize">
      <img
        :src="`https://avatars2.githubusercontent.com/u/`+`${this.$route.params.id}`+`?v=4`"       
      >
    </v-avatar>
  

          
        </v-container>
        </v-flex>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        user:[],
        avatarSize:300
    }
},
mounted(){
    console.log(this.$route.params.id)
    console.log( this.$route.params.name)
    return this.$route.params.html_url
},
created(){
    this.initialize()
},
methods:{
    initialize(){
        var data=this.$route.params.id
        axios.get(`https://api.github.com/users/${data}`+this.user).then((res)=>{
            this.user=res.data
            
            console.log(this.user)
        }).catch((err)=>{
            console.log(err)
        })
    },
  back(){
    this.$router.go(-1)
  }
}
}
</script>

<style>


</style>
