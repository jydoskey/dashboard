<template>
  <div id="sidebar">
    <nav class="sidebar">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/dashboard-logo.png" alt="logo" />
          </span>
          <div class="header header-text">
            <span class="name">Dashboard</span>
            <span class="profession">Web Developer</span>
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

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
header {
  padding: 0;
}

/* Sidebar */
.sidebar {
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: var(--sidebar-color);
}

/* Reusable Code */
.sidebar .text {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
}

.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
}

.sidebar li {
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
}

.sidebar li .icon {
  font-size: 20px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar li .icon,
.sidebar li .text {
  color: var(--text-color);
  transition: var(--tran-02);
}

.sidebar header {
  position: relative;
}

.sidebar .image-text img {
  width: 40px;
  border-radius: 6px;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}

header .image-text .header-text {
  display: flex;
  flex-direction: column;
}

.header-text .name {
  font-weight: 600;
}

.header-text .profession {
  margin-top: -2px;
}

.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  height: 25px;
  width: 25px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--sidebar-color);
  font-size: 22px;
}

.sidebar .search-box {
  background: var(--primary-color-light);
}

.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  background: var(--primary-color-light);
}

ul {
  padding-inline-start: 0;
}

.sidebar li a {
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 6px;
  align-items: center;
  text-decoration: none;
  transition: var(--tran-04);
}

.sidebar li a:hover {
  background: var(--primary-color);
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}

.sidebar .menu-bar {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-bar .mode {
  background: var(--primary-color-light);
}

.menu-bar .mode .moon-sun {
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}

.menu-bar .mode i {
  position: absolute;
}

.menu-bar .mode i.sun {
  opacity: 0;
}

.menu-bar .mode .toggle-switch {
  display: flex;
  height: 100%;
  min-width: 60px;
  align-items: center;
  justify-content: center;
}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: var(--toggle-color);
}
</style>