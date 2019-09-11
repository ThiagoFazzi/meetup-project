<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" temporary absolute>
      <v-list>
        <v-list-item v-for="item in menuItens" :key="item.title" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="primary" app dark>
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="d-sm-none d-md-none d-lg-none d-xl-none"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Meetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text v-for="item in menuItens" :key="item.title" :to="item.path">
          <v-icon left>{{ item.icon}}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false,
      menuItens: [
        {
          icon: "mdi-account-supervisor",
          title: "View Meetups",
          path: "/meetups"
        },
        {
          icon: "mdi-map-marker",
          title: "Organize Meetups",
          path: "meetup/new"
        },
        { icon: "mdi-account", title: "Profile", path: "/profile" },
        { icon: "mdi-face", title: "Sign up", path: "/signin" },
        { icon: "mdi-lock-open", title: "Sign in", path: "/signup" }
      ]
    }
  }
}
</script>
