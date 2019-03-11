<template>
    <div class="myTickets row">
        <div v-for="ticket in tickets" class="col-10 offset-1 plain-card">
            <router-link class="linkz" :to="{name: 'ticketDetails', params: {id:ticket._id}}">
                <div class="row">
                    <div class="col-4 left-side">
                        <h2>{{ticket.title}}</h2>
                    </div>
                    <div class="col-4">
                        <p><i>Requested on Behalf of : {{ticket.creator}}</i></p>
                        <p><i>Requested by : {{ticket.user}}</i></p>

                    </div>
                    <div class="col-4 right-side">
                        <p><i>Last Update:  {{ticket.updatedAt.split('T')[0]}}  @  {{ticket.updatedAt.split('T')[1].split('.')[0]}}</i></p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <!-- <div class="myTickets row">
        <div v-for="ticket in tickets" class="col-3 card" @click="setActiveTicket(ticket)">
            <br>
            <h5>{{ticket.title}}</h5>
            <br>
            <p>{{ticket.description}}</p>
        </div>

    </div>
    </div> -->
</template>

<script>
    export default {
        name: "myTickets",
        props: [],
        data() {
            return {}
        },
        computed: {
            tickets() {
                return this.$store.state.tickets
            },
            activeTicket() {
                return this.$store.state.activeTicket
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
    .linkz{
        color: #fd7e14;
    }
</style>
