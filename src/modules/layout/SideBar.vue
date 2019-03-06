<template>
  <v-navigation-drawer
    width="200px"
    app
    :clipped="drawer.clipped"
    :fixed="drawer.fixed"
    :permanent="drawer.permanent"
    :mobile-break-point="3000"
    :mini-variant="drawer.mini"
    v-model="drawer.open"
    stateless
    hide-overlay
    :style="cssProps"
  >
    <v-divider/>
    <v-list dense>
      <template v-for="menu in menus">
        <v-list-tile v-if="!menu.children" :key="menu.title" :to="{ name: menu.route }" ripple>
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ $t(menu.title) }}</v-list-tile-title>
        </v-list-tile>
        <v-list-group
          v-if="menu.children"
          :key="menu.title"
          :prepend-icon="menu.icon"
          :value="menuGroupShouldBeExpanded(menu)"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>{{ $t(menu.title) }}</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action sub-group value="true">
            <v-list-tile slot="activator">
              <v-list-tile-title>Electronics</v-list-tile-title>
            </v-list-tile>

            <div v-for="category in categories" :key="category">
              <v-list-tile :to="{name:category.route}">
                <v-list-tile-title>{{ category.title}}</v-list-tile-title>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-tile
            v-for="submenu in menu.children"
            :key="submenu.title"
            :to="{name:submenu.route}"
          >
            <v-list-tile-action>
              <v-icon>{{ submenu.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t(submenu.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import { eventBus } from "@/main.js";

export default {
  data: () => ({
    mini: false,
    right: null,
    categories: [
      {
        title: "Computers",
        route: "computer-list"
      },
      {
        title: "Mobiles",
        route: "mobile-list"
      },
      {
        title: "Accessories",
        route: "accessory-list"
      }
    ],
    menus: [
      {
        title: "Home",
        icon: "dashboard",
        route: "home",
        allowedRoles: ["admin", "super-admin"]
      },
      {
        title: "Product",
        icon: "layers",

        children: [
          {
            title: "Men's",
            route: "men-list"
          },
          {
            title: "Female's",
            route: "female-list"
          },
          {
            title: "News",
            route: "new-list"
          }
        ]
      },
      { icon: "settings", title: "Settings", route: "setting-list" },
      { icon: "chat_bubble", title: "Send feedback", route: "feadback-list" },
      { icon: "done", title: "About the Website", route: "about-list" },
      { icon: "help", title: "Help", route: "help-list" },
      { icon: "phonelink", title: "App downloads", route: "download-list" },
      { icon: "add_shopping_cart", title: "Cart", route: "cart-list" },
      { icon: "person", title: "Sign in", route: "login" }
    ],
    drawer: {
      open: null,
      clipped: true,
      fixed: false,
      permanent: true,
      mini: false
    },
    footer: {
      fixed: true,
      clippedLeft: true
    }
  }),

  computed: {
    ...mapState("core", ["appName"]),
    cssProps() {
      return {
        "--secondary-color": this.$vuetify.theme.secondary
      };
    },
    drawerStatus: {
      get() {
        return this.$store.state.layout.navDrawerToggle;
      },
      set(newValue) {
        this.$store.state.layout.navDrawerToggle = newValue;
      }
    }
  },
  created() {
    eventBus.$on("toggleDrawer", data => {
      this.toggleDrawer();
    });
  },
  methods: {
    menuGroupShouldBeExpanded(menu) {
      if (menu.childrenUrlMatcher) {
        return this.$route.fullPath.includes(menu.childrenUrlMatcher);
      }

      return false;
    },
    tgl() {
      this.toggleDrawer();
    },
    makeDrawerPermanent() {
      this.drawer.permanent = true;
      this.drawer.clipped = false;
    },
    toggleDrawer() {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent;
        this.drawer.clipped = true;
        this.drawer.open = !this.drawer.open;
      } else {
        this.drawer.open = !this.drawer.open;
      }
    }
  }
};
</script>

<style>
/* .v-list__tile--active {
  background-color: var(--secondary-color);
} */
</style>
