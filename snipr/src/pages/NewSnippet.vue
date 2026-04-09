<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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

  // Save to localStorage for now - replace with Supabase later
  const existing = JSON.parse(localStorage.getItem("snippets") || "[]");
  existing.push(snippet);
  localStorage.setItem("snippets", JSON.stringify(existing));

  console.log("Saved:", snippet);
  router.push("/dashboard");
};

const handleCancel = () => {
  router.push("/dashboard");
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
          class="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          @click="router.push('/dashboard')"
        >
          <span class="font-bold text-lg">S</span>
        </div>
        <h1 class="text-xl font-light">New Snippet</h1>
      </div>
      <div class="flex items-center gap-3">
        <button
          @click="handleCancel"
          class="text-zinc-400 hover:text-white px-4 py-2 text-sm transition-colors"
        >
          Cancel
        </button>
        <button
          @click="handleSave"
          class="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Save Snippet
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-5xl mx-auto p-6">
      <div class="grid gap-6">
        <!-- Title & Meta Row -->
        <div class="grid md:grid-cols-3 gap-4">
          <!-- Title -->
          <div class="md:col-span-2">
            <label class="block text-sm text-zinc-400 mb-2"
              >Snippet Title *</label
            >
            <input
              v-model="title"
              type="text"
              placeholder="e.g., Responsive Navigation Bar"
              class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <!-- Framework -->
          <div>
            <label class="block text-sm text-zinc-400 mb-2">Framework *</label>
            <select
              v-model="framework"
              class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option v-for="fw in frameworks" :key="fw" :value="fw">
                {{ fw }}
              </option>
            </select>
          </div>
        </div>

        <!-- Category & Tags Row -->
        <div class="grid md:grid-cols-2 gap-4">
          <!-- Category -->
          <div>
            <label class="block text-sm text-zinc-400 mb-2">Category *</label>
            <select
              v-model="category"
              class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>

          <!-- Tags -->
          <div>
            <label class="block text-sm text-zinc-400 mb-2"
              >Tags (comma separated)</label
            >
            <input
              v-model="tags"
              type="text"
              placeholder="e.g., responsive, dark-mode, animated"
              class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm text-zinc-400 mb-2">Description</label>
          <textarea
            v-model="description"
            rows="2"
            placeholder="Brief description of what this snippet does..."
            class="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          ></textarea>
        </div>

        <!-- Code Editor -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm text-zinc-400">Code *</label>
            <div class="flex items-center gap-2">
              <span class="text-xs text-zinc-500">{{ framework }}</span>
              <button
                @click="code = ''"
                class="text-xs text-zinc-500 hover:text-white transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          <div class="relative">
            <textarea
              v-model="code"
              rows="16"
              placeholder="Paste or type your code here..."
              class="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              spellcheck="false"
            ></textarea>

            <!-- Line numbers decoration -->
            <div
              class="absolute left-0 top-0 bottom-0 w-12 bg-zinc-900/50 border-r border-zinc-800 rounded-l-lg pointer-events-none hidden md:flex flex-col items-center pt-4"
            >
              <span
                v-for="n in 16"
                :key="n"
                class="text-xs text-zinc-600 leading-6"
                >{{ n }}</span
              >
            </div>
          </div>
        </div>

        <!-- Preview Card -->
        <div
          v-if="code"
          class="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4"
        >
          <h3 class="text-sm text-zinc-400 mb-2">Preview</h3>
          <div class="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
            <pre
              class="text-xs text-zinc-400 font-mono"
            ><code>{{ code.slice(0, 200) }}{{ code.length > 200 ? '...' : '' }}</code></pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
