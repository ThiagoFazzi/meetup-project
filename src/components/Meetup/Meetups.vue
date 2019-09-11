<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-layout row v-for="meetup in meetups" :key="meetup.id">
          <v-flex xs12 md12 class="mb-2">
            <v-card class="info mx-auto" dark height="150px">
              <v-layout row wrap>
                <v-flex xs6 md6>
                  <v-img :src="meetup.imageUrl" width="100%" height="150px" cover />
                </v-flex>

                <v-flex xs6 md6>
                  <v-card-title>{{ meetup.title}}</v-card-title>
                  <v-card-text>{{ meetup.date }}</v-card-text>
                  <v-card-actions>
                    <v-btn text :to="'/meetups/' + meetup.id">
                      <v-icon>mdi-arrow-right</v-icon>View Meetup
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-card>
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
      console.log(this.$store.getters.loadedMeetups);
      return this.$store.getters.loadedMeetups;
    }
  }
}
</script>