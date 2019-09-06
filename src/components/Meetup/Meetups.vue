<template>
  <v-container>
    <v-col v-for="meetup in meetups" :key="meetup.id">
      <v-card class="info" dark>
        <v-list-item three-line>
          <v-list-item-avatar style="width: 40%; height: 130px; marginLeft: 4px" tile>
            <v-img :src="meetup.imageUrl" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline mb-0">{{ meetup.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ meetup.date }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-card-actions>
            <v-btn text :to="'/meetups/' + meetup.id">
              <v-icon>mdi-arrow-right</v-icon>View Meetup
            </v-btn>
          </v-card-actions>
        </v-list-item>
      </v-card>
    </v-col>
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
};
</script>