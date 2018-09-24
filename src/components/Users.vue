<template>
<v-app>
  <v-card>
    <v-card-title>

      <v-spacer></v-spacer>
     
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    >
    
    
    <template slot="items" slot-scope="props">  
      <td class="text-xs-right">{{ props.item.id }}</td>   
      <td class="text-xs-right">{{ props.item.login }}</td>
      <td class="text-xs-right">{{ props.item.avatar_url }}</td>
      <td class="text-xs-right">{{ props.item.events_url }}</td>
      <td class="text-xs-right">{{ props.item.node_id }}</td>
      <td class="text-xs-right">{{ props.item.subscriptions_url }}</td>
      <td class="text-xs-right">{{ props.item.following_url }}</td>
      <td class="text-xs-right">{{ props.item.gists_url }}</td>
      <td class="text-xs-right">{{ props.item.html_url }}</td>
        <v-btn class="success"  @click="View(props.item)">
            <v-icon color="teal">person</v-icon>Details
          </v-btn>
    </template> 
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: `https://api.github.com/users`,
      items: [],
      search:'',
      loading:false,
      headers: [
        { text: "Id", align: "center", value: "id" },
        { text: "Login", align: "center", value: "login" },
        { text: "Avatar_url", align: "center", value: "avatar_url" },
        { text: "Events_Url", align: "center", value: "events_url" },
        { text: "Node_id", align: "center", value: "node_id" },
        { text: "Subscriptions_url", align: "center", value: "subscriptions_url" },
        { text: "Following_Url", align: "center", value: "following_url" },
        { text: "Gists_Url", align: "center", value: "gists_url" },
        { text: "Html_Url", align: "center", value: "html_url" },
        { text: "Actions", align: "center", value: "name", sortable: false }
      ]
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    View(item){        
        var user=item.id
        var name=item.login
        var html_url=item.html_url
         this.$router.push({
      name:'UserDetails',
      params:{
        id:user,
        name:name,
        html_url:html_url
      }
    })

    },
    initialize() {
      var token = " 5d79edc99e20008d315189327df5563acaf35c7b";
      this.loading=true;
      axios
        .get(this.url, {}, this.items, {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          this.items = response.data;
        this.loading=false;
          console.log(this.items);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
 .p{
   color: white
 }
</style>