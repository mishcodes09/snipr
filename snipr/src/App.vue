<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const isHomePage = computed(() => route.path === "/");
</script>

<template>
  <main class="bg-white text-black min-h-screen">
    <!-- Show navbar on all pages except login/signup -->
    <Navbar v-if="isHomePage" />

    <!-- Router handles which page to show -->
    <router-view />

    <!-- Show footer only on homepage -->
    <Footer v-if="isHomePage" />
  </main>
</template>
