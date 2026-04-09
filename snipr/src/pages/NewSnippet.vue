<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DashboardNavbar from "../components/DashboardNavbar.vue";

const router = useRouter();

const title = ref("");
const category = ref("Hero Sections");
const framework = ref("Vue");
const code = ref("");
const description = ref("");
const tags = ref("");

const categories = [
  "Hero Sections",
  "Navigation",
  "Cards",
  "Forms",
  "Buttons",
  "Footers",
  "Modals",
  "Tables",
  "Other",
];

const frameworks = [
  "Vue",
  "React",
  "Angular",
  "Svelte",
  "Vanilla JS",
  "HTML/CSS",
];

const handleSave = () => {
  if (!title.value.trim() || !code.value.trim()) {
    alert("Please fill in title and code");
    return;
  }

  const snippet = {
    id: Date.now(),
    title: title.value,
    category: category.value,
    framework: framework.value,
    code: code.value,
    description: description.value,
    tags: tags.value
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t),
    created_at: new Date().toISOString().split("T")[0],
  };

  const existing = JSON.parse(localStorage.getItem("snippets") || "[]");
  existing.push(snippet);
  localStorage.setItem("snippets", JSON.stringify(existing));

  router.push("/dashboard");
};

const handleCancel = () => {
  router.push("/dashboard");
};
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <DashboardNavbar />

    <div class="flex">
      <!-- Sidebar - Matching Dashboard -->
      <aside
        class="w-64 bg-white border-r border-black h-screen sticky top-16 p-6 hidden md:block overflow-y-auto"
      >
        <nav class="space-y-1">
          <button
            @click="router.push('/dashboard')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            ← Back to Dashboard
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
            Create a New Snippet
          </h2>
          <div class="flex items-center gap-3">
            <button
              @click="handleCancel"
              class="text-zinc-600 hover:text-black px-4 py-2 text-sm font-medium transition-colors border border-zinc-300 hover:border-black rounded-lg"
            >
              Cancel
            </button>
            <button
              @click="handleSave"
              class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Save Snippet
            </button>
          </div>
        </div>

        <!-- Form Grid - Matching Dashboard/SnippetsGrid style -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black rounded-lg overflow-hidden"
        >
          <!-- Title -->
          <div class="bg-white p-6">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >Snippet Title *</label
            >
            <input
              v-model="title"
              type="text"
              placeholder="e.g., Responsive Navigation Bar"
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <!-- Framework -->
          <div class="bg-white p-6">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >Framework *</label
            >
            <select
              v-model="framework"
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option v-for="fw in frameworks" :key="fw" :value="fw">
                {{ fw }}
              </option>
            </select>
          </div>

          <!-- Category -->
          <div class="bg-white p-6">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >Category *</label
            >
            <select
              v-model="category"
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>

          <!-- Tags -->
          <div class="bg-white p-6">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >Tags</label
            >
            <input
              v-model="tags"
              type="text"
              placeholder="e.g., responsive, dark-mode, animated"
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <!-- Description - Full width -->
          <div class="bg-white p-6 md:col-span-2">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >Description</label
            >
            <textarea
              v-model="description"
              rows="3"
              placeholder="Brief description of what this snippet does..."
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Code Editor - Full width -->
          <div class="bg-white p-6 md:col-span-2">
            <div class="flex items-center justify-between mb-2">
              <label
                class="block text-sm text-zinc-500 uppercase tracking-wider"
                >Code *</label
              >
              <div class="flex items-center gap-2">
                <span
                  class="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded border border-zinc-200"
                  >{{ framework }}</span
                >
                <button
                  @click="code = ''"
                  class="text-xs text-zinc-500 hover:text-black transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <textarea
              v-model="code"
              rows="16"
              placeholder="Paste or type your code here..."
              class="w-full bg-zinc-50 border border-black rounded-lg p-4 text-sm font-mono text-zinc-700 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              spellcheck="false"
            ></textarea>
          </div>

          <!-- Preview - Full width, shows when code exists -->
          <div v-if="code" class="bg-white p-6 md:col-span-2">
            <h3 class="text-sm text-zinc-500 uppercase tracking-wider mb-2">
              Preview
            </h3>
            <div
              class="bg-zinc-100 rounded-lg p-4 overflow-x-auto border border-black"
            >
              <pre
                class="text-xs text-zinc-600 font-mono"
              ><code>{{ code.slice(0, 300) }}{{ code.length > 300 ? '...' : '' }}</code></pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
