<template>
  <v-container>
    <v-layout row>
      <v-flex xs10 offset-xs1 sm10 offset-sm1 md4 offset-md4>
        <v-layout row>
          <v-flex xs12>
            <h2 class="secondary--text">Create a nes Meetup</h2>
          </v-flex>
        </v-layout>

        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12>
              <v-text-field label="Title" name="title" id="title" v-model="title" required />
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-text-field
                label="Location"
                name="location"
                id="location"
                v-model="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-text-field
                label="Image URL"
                name="imageUrl"
                id="image-url"
                v-model="imageUrl"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <img :src="imageUrl" :alt="title" width="100%" />
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-textarea
                label="Description"
                name="description"
                id="description"
                rows="10"
                auto-grow
                v-model="description"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm12 class="mb-2">
              <v-date-picker v-model="date" full-width></v-date-picker>
            </v-flex>

            <v-flex xs12 sm12 class="mb-2">
              <v-time-picker v-model="time" full-width format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-btn :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      date: new Date().toISOString().substr(0, 10),
      time: null
    }
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      )
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch("createMeetup", meetupData)
      this.$router.push("/meetups")
    }
  }
}
</script>