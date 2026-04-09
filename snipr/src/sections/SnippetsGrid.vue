<script setup>
import { ref } from "vue";

const snippetCategories = ref([
  {
    id: 1,
    title: "Hero Sections",
    subtitle: "Landing headers",
    description:
      "Full-width banner sections with headings, CTAs, and background images or gradients for first impressions.",
    previewImage: "/src/assets/images/hero-preview.jpg",
    count: 12,
  },
  {
    id: 2,
    title: "Navigation",
    subtitle: "Menu bars",
    description:
      "Responsive navigation bars with hamburger menus, dropdowns, and sticky positioning patterns.",
    previewImage: "/src/assets/images/nav-preview.jpg",
    count: 8,
  },
  {
    id: 3,
    title: "Cards",
    subtitle: "Content containers",
    description:
      "Flexible card layouts for products, articles, profiles, and feature highlights with hover effects.",
    previewImage: "/src/assets/images/cards-preview.jpg",
    count: 15,
  },
  {
    id: 4,
    title: "Forms",
    subtitle: "Input patterns",
    description:
      "Login forms, contact forms, and input validation patterns with various styling approaches.",
    previewImage: "/src/assets/images/forms-preview.jpg",
    count: 6,
  },
]);
</script>

<template>
  <section class="px-6 md:px-12 lg:px-20 py-16 bg-white">
    <!-- Section Header -->
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-sm font-medium tracking-widest text-zinc-500 uppercase">
        Components
      </h2>
      <a
        href="/components"
        class="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-lg"
      >
        View all
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>

    <!-- Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black/10 rounded-lg overflow-hidden"
    >
      <a
        v-for="category in snippetCategories"
        :key="category.id"
        :href="`/components/${category.title.toLowerCase().replace(' ', '-')}`"
        class="group bg-white p-6 hover:bg-zinc-800/50 transition-colors"
      >
        <!-- Preview Image -->
        <div
          class="aspect-4/3 bg-zinc-800 rounded-lg mb-4 overflow-hidden border border-zinc-700 group-hover:border-zinc-600 transition-colors"
        >
          <img
            :src="category.previewImage"
            :alt="category.title"
            class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>

        <!-- Title & Subtitle -->
        <h3
          class="text-2xl font-light text-black mb-1 group-hover:text-white transition-colors"
        >
          {{ category.title }}
        </h3>
        <p class="text-sm text-zinc-500 italic mb-3">
          {{ category.subtitle }}
        </p>

        <!-- Description -->
        <p class="text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {{ category.description }}
        </p>

        <!-- Count Badge -->
        <div class="mt-4 flex items-center gap-2">
          <span class="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
            {{ category.count }} snippets
          </span>
        </div>
      </a>
    </div>
  </section>
</template>
