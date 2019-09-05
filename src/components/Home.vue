<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-flex xs12 sm6 class="text-center justify-space-around">
            <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
          </v-flex>
          <v-flex xs12 sm6 class="text-center justify-space-around">
            <v-btn large to="/meetup/new" class="info">Organize Meetup</v-btn>
          </v-flex>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-row>
          <v-flex xs12 class="justify-center">
            <v-carousel style="cursor: pointer">
              <v-carousel-item
                v-for="meetup in meetups"
                :src="meetup.imageURL"
                :key="meetup.id"
                @click="onLoadMeetup(meetup.id)"
              >
                <div class="title">{{ meetup.title }}</div>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-row>
          <v-flex xs12 sm12 class="text-center">
            <p>Join our awesome meetups</p>
          </v-flex>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageURL:
            "https://www.altitudeadvisory.com.au/wp-content/uploads/2018/07/times-square-holiday-market-2017.jpg",
          id: "uweyrioewtierutio",
          title: "Meetup in New York"
        },
        {
          imageURL:
            "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Netherlands/Amsterdam/amsterdam-GettyImages-923546342.jpg",
          id: "ksfsdmfejgerddf",
          title: "Meetup in Amsterdam"
        }
      ]
    };
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push(`/meetup/${id}`);
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
}
</style>