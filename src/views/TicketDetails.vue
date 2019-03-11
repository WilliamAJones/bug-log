<template>
   <div class="ticketdetails container-fluid">
      <div class="row">
         <div id="nav" class="col-12">
            <router-link to="/home">||<i class="fas fa-home fa-spin"></i>Home ||</router-link>
         </div>
      </div>
      <div class="row">
         <div class="col-10">
            <div v-if="ticket.creator" class="row">
               <div class="col-10 offset-2 activeticket">
                  <h1>{{ticket.title}}</h1>
                  <br>
                  <h4><i>Opened By: {{ticket.user}} || On Behalf Of: {{ticket.creator}}</i></h4>
                  <hr>
                  <h6>Status: {{tstatus}} || Created On: {{ticket.updatedAt.split('T')[0]}} @
                     {{ticket.updatedAt.split('T')[1].split('.')[0]}} </h6>
                  <hr>
                  <br>
                  <p>{{ticket.description}}</p>
               </div>
               <div class="col-8 offset-2 activeticket">
                  <form class="row" @submit.prevent='CreateComment' v-if="seen">
                     <div class="col-6 lefty">
                        <input type="text" v-model="newComment.creator" name="creator" placeholder="Requester:"
                           required>
                     </div>
                     <div class="col-6 righty">
                        <textarea name="newComment.content" v-model="newComment.content" class="mt-2" rows=""
                           cols="30" wrap="soft" maxlength="" style="overflow:show; resize:true;"
                           placeholder="Message.."></textarea>
                        <input type="submit" value="Post Note">
                     </div>
                  </form>
               </div>
               <div class="col-2 activeticket">
                  <button @click="seen = !seen">Add Note</button>
               </div>
            </div>
            <notes></notes>
         </div>
      </div>
   </div>
</template>

<script>

   import Notes from '@/components/Notes.vue'

   export default {
      name: "ticketDetails",
      props: ['id'],
      data() {
         return {
            seen: false,
            newComment: {
               bug: this.id,
               creator: '',
               content: ''
            },
         }
      },
      mounted() {
         //this.$route.params.id
         if (this.$store.state.tickets.length == 0) {
            this.$store.dispatch('initialize')
         }
         if (this.$store.state.comments.length == 0) {
            this.$store.dispatch('initialize')
         }
      },

      computed: {
         ticket() {
            return this.$store.state.tickets.find(t => t._id == this.id) || {}
         },
         tstatus() {
            if (this.ticket.closed) {
               return 'Closed'
            }
            return 'Open'
         }
      },
      methods: {
         CreateComment() {
            this.$store.dispatch('createComment', this.newComment)
         }
      },
      components: {
         Notes
      }
   }
</script>
<style>
   .activeticket {
      background-color: rgba(240, 240, 240, 0.137);
      color: #fd7e14;
      text-shadow: 1px 1px black;
      border-top-color: black;
      border-right-color: black;
      border-right-style: solid;
      border-top-style: solid;
      letter-spacing: 1px;
      /* margin-left: auto;
      margin-right: auto; */
      /* margin-top: -2em; */
      padding-top: 1vh;
      padding-bottom: 1vh;
      align-items: center !important;
      text-align: left;
      text-decoration: none;
      border-radius: 20px;

   }

   hr {
      background-color: gray;
      height: 2px;
   }
</style>