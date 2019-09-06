<template>
  <v-container>
    <v-card class="mx-auto" max-width="100%">
      <v-card-title class="align-end fill-height primary--text">{{ meetup.title }}</v-card-title>
      <v-img height="400px" :src="meetup.imageUrl"></v-img>

      <v-card-text>
        <div class="info--text">{{ meetup.date}} - {{ meetup.location}}</div>
        <div>{{ meetup.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn class="primary">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>