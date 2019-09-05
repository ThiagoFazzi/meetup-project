<template>
  <v-container>
    <v-col v-for="meetup in meetups" :key="meetup.id">
      <v-card class="info" dark>
        <v-list-item three-line>
          <v-list-item-avatar style="width: 50%; height: 130px; marginLeft: 10px" tile>
            <v-img :src="meetup.imageURL" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline mb-2">{{ meetup.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ meetup.date }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-card-actions>
            <v-btn text to="/meetup/1">
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
  data() {
    return {
      meetups: [
        {
          imageURL:
            "https://www.altitudeadvisory.com.au/wp-content/uploads/2018/07/times-square-holiday-market-2017.jpg",
          id: "uweyrioewtierutio",
          title: "Meetup in New York",
          date: "17th July, 2019"
        },
        {
          imageURL:
            "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Netherlands/Amsterdam/amsterdam-GettyImages-923546342.jpg",
          id: "ksfsdmfejgerddf",
          title: "Meetup in Amsterdam",
          date: "21th October, 2019"
        }
      ]
    };
  }
};
</script>