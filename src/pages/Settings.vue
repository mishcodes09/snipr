<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DashboardNavbar from "../components/DashboardNavbar.vue";

const router = useRouter();

const user = ref({
  name: "John Doe",
  email: "john@example.com",
  avatar: "JD",
});

const preferences = ref({
  defaultFramework: "Vue",
  theme: "Light",
  emailNotifications: true,
  publicProfile: false,
});

const frameworks = ["Vue", "React", "Angular", "Svelte", "Vanilla JS"];
const themes = ["Light", "Dark", "System"];

const saveSettings = () => {
  localStorage.setItem("userSettings", JSON.stringify(preferences.value));
  alert("Settings saved!");
};

const deleteAccount = () => {
  if (confirm("Are you sure? This cannot be undone.")) {
    localStorage.clear();
    router.push("/login");
  }
};
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <DashboardNavbar />

    <div class="flex">
      <!-- Sidebar -->
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
            Settings
          </h2>
          <button
            @click="saveSettings"
            class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Save Changes
          </button>
        </div>

        <!-- Profile Section -->
        <div id="profile" class="mb-8">
          <h3 class="text-lg font-light text-black mb-4">Profile</h3>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black rounded-lg overflow-hidden"
          >
            <!-- Avatar -->
            <div class="bg-white p-6 md:col-span-2 flex items-center gap-4">
              <div
                class="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-medium"
              >
                {{ user.avatar }}
              </div>
              <div>
                <p class="text-sm text-zinc-500 mb-1">Profile Picture</p>
                <button
                  class="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Change Avatar
                </button>
              </div>
            </div>

            <!-- Name -->
            <div class="bg-white p-6">
              <label
                class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
                >Full Name</label
              >
              <input
                v-model="user.name"
                type="text"
                class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <!-- Email -->
            <div class="bg-white p-6">
              <label
                class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
                >Email</label
              >
              <input
                v-model="user.email"
                type="email"
                class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <!-- Preferences Section -->
        <div id="preferences" class="mb-8">
          <h3 class="text-lg font-light text-black mb-4">Preferences</h3>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black rounded-lg overflow-hidden"
          >
            <!-- Default Framework -->
            <div class="bg-white p-6">
              <label
                class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
                >Default Framework</label
              >
              <select
                v-model="preferences.defaultFramework"
                class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option v-for="fw in frameworks" :key="fw" :value="fw">
                  {{ fw }}
                </option>
              </select>
            </div>

            <!-- Theme -->
            <div class="bg-white p-6">
              <label
                class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
                >Theme</label
              >
              <select
                v-model="preferences.theme"
                class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option v-for="t in themes" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>

            <!-- Email Notifications -->
            <div class="bg-white p-6 flex items-center justify-between">
              <div>
                <label
                  class="block text-sm text-zinc-500 uppercase tracking-wider"
                  >Email Notifications</label
                >
                <p class="text-xs text-zinc-400 mt-1">
                  Receive updates about your snippets
                </p>
              </div>
              <button
                @click="
                  preferences.emailNotifications =
                    !preferences.emailNotifications
                "
                :class="[
                  'w-12 h-6 rounded-full transition-colors relative',
                  preferences.emailNotifications
                    ? 'bg-blue-600'
                    : 'bg-zinc-300',
                ]"
              >
                <span
                  :class="[
                    'absolute top-1 w-4 h-4 bg-white rounded-full transition-transform',
                    preferences.emailNotifications
                      ? 'translate-x-7'
                      : 'translate-x-1',
                  ]"
                ></span>
              </button>
            </div>

            <!-- Public Profile -->
            <div class="bg-white p-6 flex items-center justify-between">
              <div>
                <label
                  class="block text-sm text-zinc-500 uppercase tracking-wider"
                  >Public Profile</label
                >
                <p class="text-xs text-zinc-400 mt-1">
                  Make your snippets discoverable
                </p>
              </div>
              <button
                @click="preferences.publicProfile = !preferences.publicProfile"
                :class="[
                  'w-12 h-6 rounded-full transition-colors relative',
                  preferences.publicProfile ? 'bg-blue-600' : 'bg-zinc-300',
                ]"
              >
                <span
                  :class="[
                    'absolute top-1 w-4 h-4 bg-white rounded-full transition-transform',
                    preferences.publicProfile
                      ? 'translate-x-7'
                      : 'translate-x-1',
                  ]"
                ></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Account Section -->
        <div id="account">
          <h3 class="text-lg font-light text-black mb-4">Account</h3>
          <div
            class="grid grid-cols-1 gap-px bg-black border border-black rounded-lg overflow-hidden"
          >
            <!-- Change Password -->
            <div class="bg-white p-6 flex items-center justify-between">
              <div>
                <label
                  class="block text-sm text-zinc-500 uppercase tracking-wider"
                  >Password</label
                >
                <p class="text-xs text-zinc-400 mt-1">
                  Update your password regularly
                </p>
              </div>
              <button
                class="text-sm text-blue-600 hover:text-blue-700 font-medium border border-zinc-300 hover:border-black px-4 py-2 rounded-lg transition-colors"
              >
                Change Password
              </button>
            </div>

            <!-- Export Data -->
            <div class="bg-white p-6 flex items-center justify-between">
              <div>
                <label
                  class="block text-sm text-zinc-500 uppercase tracking-wider"
                  >Export Data</label
                >
                <p class="text-xs text-zinc-400 mt-1">
                  Download all your snippets
                </p>
              </div>
              <button
                class="text-sm text-zinc-600 hover:text-black font-medium border border-zinc-300 hover:border-black px-4 py-2 rounded-lg transition-colors"
              >
                Export JSON
              </button>
            </div>

            <!-- Delete Account -->
            <div class="bg-white p-6 flex items-center justify-between">
              <div>
                <label
                  class="block text-sm text-red-500 uppercase tracking-wider"
                  >Danger Zone</label
                >
                <p class="text-xs text-zinc-400 mt-1">
                  Permanently delete your account
                </p>
              </div>
              <button
                @click="deleteAccount"
                class="text-sm text-red-600 hover:text-red-700 font-medium border border-red-300 hover:border-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
