<template>
  <div class="home container-fluid">
    <div class="row">
      <div id="nav" class="col-12">
        <router-link to="/home">||<i class="fas fa-home"></i>Home||</router-link> 
         <p @click="seen = !seen">||<i class="fas fa-bug fa-spin"></i>Create Ticket||</p>
      </div>
      <div class="col-12">
        <form class="row" @submit.prevent='CreateTicket' v-if="seen">
          <div class="col-6 lefty">
            <input type="text" v-model="newTicket.title" name="title" placeholder="Title:" required>
            <br>
            <input type="text" v-model="newTicket.creator" name="creator" placeholder="Requester:" required>
          </div>
          <div class="col-6 righty">
            <textarea name="description" v-model="newTicket.description" class="mt-2" rows="" cols="50" wrap="soft"
              maxlength="" style="overflow:show; resize:true;" placeholder="Message.."></textarea>
            <input type="submit" value="Send Report">
          </div>
        </form>

      </div>
      <div class="col-12">
        <MyTickets></MyTickets>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  // import components here AND list them below
  import MyTickets from '@/components/MyTickets.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('initialize')
    },
    data() {
      return {
        seen: false,
        newTicket: {}
      }
    },
    components: {
      MyTickets
    },
    methods: {
      CreateTicket() {
        this.$store.dispatch('createTicket', this.newTicket)
      }
    }
  }
</script>
<style>
  #nav {
    padding: 30px;
    text-align: center;
    min-height: 10vh;
  }

  #nav a {
    font-weight: bold;
    color: #fd7e14;
  }

  p{
    font-weight: bold;
    color: #fd7e14;
  }

  #nav a.router-link-exact-active {
    color: #ff0800;
  }

  .lefty {
    text-align: right;
  }

  .home {
    background-color: black;

  }
</style>