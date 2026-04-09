<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/images/snipr-trns.png";

const router = useRouter();
const showProfileMenu = ref(false);

const logout = () => {
  localStorage.removeItem("user");
  router.push("/login");
};

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "AI Translate", path: "/translate" },
  { label: "New Snippet", path: "/new" },
];
</script>

<template>
  <nav class="bg-white border-b border-zinc-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo (Left) -->
        <div class="shrink-0 cursor-pointer" @click="router.push('/dashboard')">
          <img :src="logo" alt="Snipr" class="h-13 w-auto" />
        </div>

        <!-- Navigation Links (Center) -->
        <div
          class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
        >
          <button
            v-for="item in navItems"
            :key="item.path"
            @click="router.push(item.path)"
            :class="[
              'text-sm font-medium transition-colors',
              $route.path === item.path
                ? 'text-blue-600'
                : 'text-zinc-600 hover:text-black',
            ]"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-4">
          <!-- Search Button -->
          <button
            class="p-2 text-zinc-600 hover:text-black rounded-lg hover:bg-zinc-100 transition-colors"
            @click="router.push('/dashboard')"
          >
            <svg
              class="w-5 h-5"
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
          </button>

          <!-- Notifications -->
          <button
            class="p-2 text-zinc-600 hover:text-black rounded-lg hover:bg-zinc-100 transition-colors relative"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span
              class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"
            ></span>
          </button>

          <!-- Profile Dropdown -->
          <div class="relative">
            <button
              @click="showProfileMenu = !showProfileMenu"
              class="flex items-center gap-2 p-1.5 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <div
                class="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
              >
                <span class="text-white text-sm font-medium">JD</span>
              </div>
              <svg
                class="w-4 h-4 text-zinc-600 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="showProfileMenu"
              class="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg py-1"
            >
              <div class="px-4 py-2 border-b border-zinc-200">
                <p class="text-sm font-medium text-black">John Doe</p>
                <p class="text-xs text-zinc-500">john@example.com</p>
              </div>
              <button
                @click="
                  router.push('/settings');
                  showProfileMenu = false;
                "
                class="w-full text-left px-4 py-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-50 transition-colors"
              >
                Settings
              </button>
              <button
                @click="logout"
                class="w-full text-left px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-zinc-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden border-t border-zinc-200">
      <div class="flex justify-around py-2">
        <button
          v-for="item in navItems"
          :key="item.path"
          @click="router.push(item.path)"
          :class="[
            'flex flex-col items-center gap-1 p-2 rounded-lg transition-colors',
            $route.path === item.path ? 'text-blue-600' : 'text-zinc-600',
          ]"
        >
          <span class="text-xs font-medium">{{ item.label }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>
