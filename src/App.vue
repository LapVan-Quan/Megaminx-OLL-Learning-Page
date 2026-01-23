<template>
  <div class="app">
    <header class="app-header">
      <div class="brand">
        <div class="brand-text">
          <h1>Alg Learning</h1>
        </div>
      </div>

      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/library" class="nav-link">Library</router-link>
        <router-link to="/practice" class="nav-link">Practice</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
.app {
  min-height: 100vh;
  background: #0b1020;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand {
  display: flex;
  align-items: center;
}

.logo {
  width: 44px;
  height: 44px;
  margin-right: 14px;
}

.brand-text h1 {
  font-size: 20px;
  margin: 0;
}

.brand-text p {
  margin: 0;
  font-size: 12px;
  opacity: 0.7;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  transition: background 0.2s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.08);
}
.main {
  padding: 40px;
}
</style>
