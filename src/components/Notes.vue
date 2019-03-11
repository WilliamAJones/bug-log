<template>
   <div class="notes row">
      <div v-for="comment in comments" class="col-10 offset-2 plain-card">
            <div class="row">
               <div class="col-8 ">
                  <h2>{{comment.content}}</h2>
               </div>
               <div class="col-4">
                  <p><i>Requested on Behalf of : {{comment.creator}}</i></p>
                  <p><i>Requested by : {{comment.user}}</i></p>
               </div>
            </div>
      </div>
   </div>

</template>

<script>
   export default {
      name: "notes",
      props: [],
      data() {
         return {}
      },
      mounted(){
         // if (this.$store.state.comments.length == 0) 
 
            this.$store.dispatch('getNotes', this.$route.params.id)
         
      },
      computed: {
        comments(){
         return this.$store.state.comments
        }
      },
      methods: {},
      components: {}
   }
</script>
<style>
   .plain-card {
        background-color: rgba(240, 240, 240, 0.137);
        color: #fd7e14;
        text-shadow: 1px 1px black;
        border-top-color: black;
        border-right-color: black;
        border-right-style: solid;
        border-top-style: solid;
        letter-spacing: 1px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1em;
        padding-top: 1vh;
        padding-bottom: 1vh;
        align-items: center !important;
        text-decoration: none;
        border-radius: 20px;
    }
    .notes{
       min-height:5vh;
    }
</style>