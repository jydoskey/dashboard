<template>
  <div id="sidebar">
    <nav class="sidebar close">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/dashboard-logo.png" alt="logo" />
          </span>
          <div class="header header-text">
            <span class="name text">Dashboard</span>
            <span class="profession text">Web Developer</span>
          </div>
        </div>
        <i class="bx bx-chevron-right toggle"></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <li class="search-box">
            <i class="bx bx-search icon"></i>
            <input type="search" placeholder="Search..." />
          </li>
          <ul class="menu-links">
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-bar-chart-alt-2 icon"></i>
                <span class="text nav-text">Revenue</span>
              </a>
            </li>
          </ul>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-bell icon"></i>
              <span class="text nav-text">Notifications</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-pie-chart-alt icon"></i>
              <span class="text nav-text">Analytics</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-heart icon"></i>
              <span class="text nav-text">Likes</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-wallet icon"></i>
              <span class="text nav-text">Wallets</span>
            </a>
          </li>
        </div>
        <div class="bottom-content">
          <li class="">
            <a href="#">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>
          <li class="mode">
            <div class="moon-sun">
              <i class="bx bx-moon icon moon"></i>
              <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text">Dark Mode</span>
            <div class="toggle-switch">
              <span class="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "DashboardSidebar",

  data() {
    return {};
  },

  methods: {
    elementQuery() {
      const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
      });

      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
          modeText.innerText = "Light Mode";
        } else {
          modeText.innerText = "Dark Mode";
        }
      });
    },
  },

  mounted() {
    this.elementQuery();
  },
};
</script>

<style lang="css">
@import "@/styles/sidebar.css";
</style>