/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'https://www.altitudeadvisory.com.au/wp-content/uploads/2018/07/times-square-holiday-market-2017.jpg',
        id: 'uweyrioewtierutio',
        title: 'Meetup in New York',
        date: '2017-07-17',
        location: 'New York',
        description: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of
          Lorem Ipsum.`
      },
      {
        imageUrl:
          'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Netherlands/Amsterdam/amsterdam-GettyImages-923546342.jpg',
        id: 'ksfsdmfejgerddf',
        title: 'Meetup in Amsterdam',
        date: '2017-07-19',
        location: 'Amsterdam',
        description: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of
          Lorem Ipsum.`
      }
    ],
    user: {
      id: 'sdiniefjieofjieofioef',
      registeredMeetups: ['uweyrioewtierutio']
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'ywehifdjsifsafie'
      }
      // Reach Firebase out
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
