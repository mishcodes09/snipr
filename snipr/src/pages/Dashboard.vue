<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

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

// Mock data - replace with Supabase fetch
onMounted(() => {
  snippets.value = [
    {
      id: 1,
      title: "Sticky Navbar",
      category: "Navigation",
      framework: "Vue",
      code: '<nav class="sticky top-0...">',
      created_at: "2026-04-08",
    },
    {
      id: 2,
      title: "Hero with Gradient",
      category: "Hero Sections",
      framework: "React",
      code: '<div class="bg-gradient...">',
      created_at: "2026-04-07",
    },
    {
      id: 3,
      title: "Product Card",
      category: "Cards",
      framework: "Vue",
      code: '<div class="rounded-xl...">',
      created_at: "2026-04-06",
    },
  ];
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

const logout = () => {
  localStorage.removeItem("user");
  router.push("/login");
};

const copySnippet = (code) => {
  navigator.clipboard.writeText(code);
  alert("Copied to clipboard!");
};
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white">
    <!-- Header -->
    <header
      class="border-b border-zinc-800 px-6 py-4 flex items-center justify-between"
    >
      <div class="flex items-center gap-4">
        <div
          class="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center"
        >
          <span class="font-bold text-lg">S</span>
        </div>
        <h1 class="text-xl font-light">Dashboard</h1>
      </div>
      <div class="flex items-center gap-4">
        <button
          @click="router.push('/translate')"
          class="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          AI Translate
        </button>
        <button @click="logout" class="text-zinc-400 hover:text-white text-sm">
          Logout
        </button>
      </div>
    </header>

    <div class="flex">
      <!-- Sidebar -->
      <aside
        class="w-64 border-r border-zinc-800 min-h-screen p-6 hidden md:block"
      >
        <h2
          class="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4"
        >
          Categories
        </h2>
        <nav class="space-y-1">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
              selectedCategory === category
                ? 'bg-blue-500/20 text-blue-400'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900',
            ]"
          >
            {{ category }}
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6">
        <!-- Search & Add -->
        <div class="flex items-center justify-between mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search snippets..."
            class="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 w-full max-w-md"
          />
          <button
            @click="router.push('/new')"
            class="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors ml-4"
          >
            + New Snippet
          </button>
        </div>

        <!-- Snippets Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="snippet in filteredSnippets()"
            :key="snippet.id"
            class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors"
          >
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="font-medium text-white">{{ snippet.title }}</h3>
                <span class="text-xs text-zinc-500">{{
                  snippet.category
                }}</span>
              </div>
              <span
                :class="[
                  'text-xs px-2 py-1 rounded',
                  snippet.framework === 'Vue'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400',
                ]"
              >
                {{ snippet.framework }}
              </span>
            </div>

            <div class="bg-zinc-950 rounded-lg p-3 mb-3">
              <code class="text-xs text-zinc-400 font-mono line-clamp-3">{{
                snippet.code
              }}</code>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-xs text-zinc-600">{{
                snippet.created_at
              }}</span>
              <button
                @click="copySnippet(snippet.code)"
                class="text-xs text-blue-400 hover:text-blue-300 font-medium"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredSnippets().length === 0" class="text-center py-20">
          <p class="text-zinc-500">No snippets found. Create your first one!</p>
        </div>
      </main>
    </div>
  </div>
</template>
