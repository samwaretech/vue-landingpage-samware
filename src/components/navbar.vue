<template>
  <nav id="navbar" style="background-color:#ed1073">
    <div class="nav-left twhite">
      <div class="logo">
        <img class="icon" src="@/assets/img/1/logo.png" alt />
        <span class="ms">Samware.io</span>
      </div>
      <ul v-bind:class="{'block': show }">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="https://blog.samware.io">BLOG</a>
        </li>
        <li>
          <a href="#about">Contact</a>
        </li>
      </ul>
    </div>
    <div class="nav-right">
      <a href="#" v-on:click="menu()">&#9776;</a>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    menu() {
      if (this.show == false) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>
<style>
.block {
  display: block !important;
}
.icon {
  height: 28px;
  width: auto;
  margin-bottom: -5px;
  margin-right: -2px;
}
</style>