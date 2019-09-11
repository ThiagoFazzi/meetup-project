<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-layout row>
          <v-flex xs12 sm6 class="text-center align-center mb-2">
            <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
          </v-flex>
          <v-flex xs12 sm6 class="text-center align-center mb-2">
            <v-btn large to="/meetup/new" class="info">Organize Meetup</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="text-center align-center mb-2">
            <v-carousel style="cursor: pointer">
              <v-carousel-item
                v-for="meetup in meetups"
                :src="meetup.imageUrl"
                :key="meetup.id"
                @click="onLoadMeetup(meetup.id)"
              >
                <div class="title">{{ meetup.title }}</div>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm12 class="text-center">
            <p>Join our awesome meetups</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push(`/meetup/${id}`)
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  width: 100%;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
}
</style>