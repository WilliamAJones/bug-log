import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js';

var _sandbox = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/william',
  timeout: 3000,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    activeTicket: {},
    comments: []
  },
  mutations: {
    setTickets(state, data) {
      state.tickets = data
    },
    setActiveTicket(state, data) {
      state.activeTicket = data
    },
    addTicket(state, data) {
      state.tickets.push(data)
    },
    setComments(state, data) {
      state.comments = data
    },
    addComment(state, data) {
      state.comments.push(data)
    },
    deleteComment(state, data) {
      state.comments.push(data)
    },
    closeTicket(state, data){
      let ticket = state.tickets.find(t => t._id == data._id)
      ticket.closed = data.closed
    }

  },
    actions: {
      initialize({ commit }) {
        _sandbox.get('bugs')
          .then(res => {
            commit('setTickets', res.data.results)
          })
      },
      getNotes({commit,dispatch},payload){
        _sandbox.get('bugs/' + payload + '/notes')
        .then(res =>{
          console.log(res)
          commit('setComments', res.data.results)
  
        })
      
      },
      setActiveTicket({ commit }, payload) {
        commit('setActiveTicket', payload)
      },
      closeTicket({commit}, payload){
        _sandbox.delete('bugs/'+payload)
        .then(res=>{
          console.log(res)
          commit('closeTicket', res.data.results)
        })
        // commit('closeTicket',payload)
      },
      createTicket({ commit, dispatch }, payload) {
        _sandbox.post('bugs', payload)
          .then(res => {
            console.log(res)
            commit('addTicket', res.data.results)
            // router.push({ name: 'details', params: { bugId: res.data.data._id } })
          })

      },
      createComment({ commit, dispatch }, payload) {
        _sandbox.post('bugs/' +payload.bug + '/notes', payload)
          .then(res => {
            console.log(res)
            commit('addComment', res.data.results)
          })

      },
      deleteComment({ commit, dispatch }, payload) {
        _sandbox.delete('bugs/' +payload.bug + '/notes/' +payload.note, payload)
          .then(res => {
            console.log(res)
           dispatch('getNotes', payload.bug)
          })

      },
    }
})
