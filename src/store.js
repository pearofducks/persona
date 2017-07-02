import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  fullName: "",
  personalDetails: {
    personaQuote: "",
    age: "",
    occupation: "",
    marital: "",
    location: "",
    tier: "",
    archetype: ""
  },
  brands: "",
  bio: "",
  goals: [],
  needs: [],
  frustrations: [],
  technology: {
    "IT & Internet": 10,
    "Mobile Apps": 10,
    "Software": 10,
    "Social Networks": 10
  }
  motivations: {
    "Incentive": 10,
    "Fear": 10,
    "Achievement": 10,
    "Growth": 10,
    "Power": 10,
    "Social": 10
  }
  personality: {
    ["Introvert", 10, "Extrovert"],
    ["Intuition", 10, "Sensing"],
    ["Feeling", 10, "Thinking"],
    ["Judging", 10, "Perceiving"]
  }


}

const mutations = {
}

const actions = {
}

const getters = {
}

export default new Vuex.Store({ state, actions, mutations, getters })
