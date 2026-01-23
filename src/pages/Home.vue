<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Rubik Algorithm Learning</h1>
    
      <div class="hero-buttons">
        <router-link to="/library" class="btn btn-primary">Go to Library</router-link>
        <router-link to="/practice" class="btn btn-secondary">Start Practice</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style>
.home {
  max-width: 900px;
  margin: 0 auto;
}

.hero {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 40px;
  text-align: center;
}

.hero h1 {
  font-size: 34px;
  margin-bottom: 12px;
}

.hero p {
  margin-bottom: 24px;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 12px 20px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
}

.btn-primary {
  background: #6b5bff;
  color: #fff;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.features {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  justify-content: space-between;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  width: 30%;
  text-align: center;
}

.feature-card h2 {
  margin-bottom: 10px;
}

.feature-card p {
  opacity: 0.8;
  font-size: 14px;
}
</style>
