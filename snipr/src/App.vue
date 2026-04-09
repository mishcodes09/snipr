<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./sections/HeroSection.vue";
import SnippetsGrid from "./sections/SnippetsGrid.vue";
import AiTranslateSection from "./sections/AiTranslateSection.vue";
import CtaBanner from "./components/CtaBanner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="bg-white text-black">
    <Navbar />
    <HeroSection />
    <SnippetsGrid />
    <AiTranslateSection />
    <CtaBanner />
    <Footer />
  </main>
</template>
