<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import DashboardNavbar from "../components/DashboardNavbar.vue";

const router = useRouter();
const snippets = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("All");

const categories = [
  "All",
  "Hero Sections",
  "Navigation",
  "Cards",
  "Forms",
  "Buttons",
  "Footers",
];

onMounted(() => {
  const saved = localStorage.getItem("snippets");
  if (saved) {
    snippets.value = JSON.parse(saved);
  }
});

const filteredSnippets = () => {
  return snippets.value.filter((snippet) => {
    const matchesSearch = snippet.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCategory =
      selectedCategory.value === "All" ||
      snippet.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
};

const copySnippet = (code) => {
  navigator.clipboard.writeText(code);
  alert("Copied to clipboard!");
};

const deleteSnippet = (id) => {
  snippets.value = snippets.value.filter((s) => s.id !== id);
  localStorage.setItem("snippets", JSON.stringify(snippets.value));
};

const getFrameworkColor = (framework) => {
  const colors = {
    Vue: "bg-green-500/20 text-green-400",
    React: "bg-blue-500/20 text-blue-400",
    Angular: "bg-red-500/20 text-red-400",
    Svelte: "bg-orange-500/20 text-orange-400",
  };
  return colors[framework] || "bg-purple-500/20 text-purple-400";
};
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <DashboardNavbar />

    <div class="flex">
      <!-- Sidebar - Sticky -->
      <aside
        class="w-64 bg-white border-r border-black h-screen sticky top-16 p-6 hidden md:block overflow-y-auto"
      >
        <h2
          class="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-4"
        >
          Categories
        </h2>
        <nav class="space-y-1">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              selectedCategory === category
                ? 'bg-blue-50 text-blue-600'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100',
            ]"
          >
            {{ category }}
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6 md:p-12 lg:p-20">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <h2
            class="text-sm font-medium tracking-widest text-zinc-500 uppercase"
          >
            My Snippets
          </h2>
          <button
            @click="router.push('/new')"
            class="flex items-center gap-1 text-sm text-zinc-600 hover:text-black transition-colors border border-zinc-300 hover:border-black px-4 py-2 rounded-lg"
          >
            + New Snippet
          </button>
        </div>

        <!-- Search -->
        <div class="mb-8">
          <div class="relative max-w-md">
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search snippets..."
              class="w-full bg-white border border-black rounded-lg pl-10 pr-4 py-3 text-black placeholder-zinc-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <!-- Snippets Grid - Same style as landing page -->
        <div
          v-if="filteredSnippets().length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-black border border-black rounded-lg overflow-hidden"
        >
          <div
            v-for="snippet in filteredSnippets()"
            :key="snippet.id"
            class="group bg-white p-6 hover:bg-zinc-50 transition-colors"
          >
            <!-- Code Preview Box -->
            <div
              class="aspect-4/3 bg-zinc-100 rounded-lg mb-4 overflow-hidden border border-black group-hover:border-black transition-colors relative"
            >
              <div class="absolute inset-0 p-4 overflow-hidden">
                <pre class="text-xs text-zinc-600 font-mono line-clamp-6">{{
                  snippet.code
                }}</pre>
              </div>
              <!-- Framework Badge -->
              <span
                :class="[
                  'absolute top-2 right-2 text-xs px-2 py-1 rounded font-medium',
                  getFrameworkColor(snippet.framework),
                ]"
              >
                {{ snippet.framework }}
              </span>
            </div>

            <!-- Title & Category -->
            <h3 class="text-2xl font-light text-black mb-1">
              {{ snippet.title }}
            </h3>
            <p class="text-sm text-zinc-500 italic mb-3">
              {{ snippet.category }}
            </p>

            <!-- Description or Code Preview -->
            <p class="text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-3">
              {{ snippet.description || snippet.code.slice(0, 100) + "..." }}
            </p>

            <!-- Actions -->
            <div class="mt-4 flex items-center justify-between">
              <span class="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                {{ snippet.created_at }}
              </span>
              <div class="flex items-center gap-2">
                <button
                  @click="copySnippet(snippet.code)"
                  class="p-1.5 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title="Copy"
                >
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <button
                  @click="deleteSnippet(snippet.id)"
                  class="p-1.5 text-zinc-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete"
                >
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="flex flex-col items-center justify-center py-20 text-center"
        >
          <div
            class="w-16 h-16 bg-white border border-black rounded-2xl flex items-center justify-center mb-4"
          >
            <svg
              class="w-8 h-8 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-black mb-2">No snippets yet</h3>
          <p class="text-zinc-500 text-sm max-w-sm">
            Start building your library by creating your first code snippet
          </p>
          <div class="mb-8"></div>
          <button
            @click="router.push('/new')"
            class="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
          >
            Create Snippet
          </button>
        </div>
      </main>
    </div>
  </div>
</template>
