<template>
  <div>
    <sidebar></sidebar>
    <dashboard></dashboard>
  </div>
</template>

<script>
import sidebar from "@/components/dashboard/sidebar.vue";
import dashboard from "@/components/dashboard/dashboard.vue";
export default {
  name: "DashboardHomepage",

  data() {
    return {};
  },

  components: {
    dashboard,
    sidebar,
  },
};
</script>