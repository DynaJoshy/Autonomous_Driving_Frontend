<template>
  <div class="main-container">
    <!-- Title and Navigation Section -->
    <div class="title-section">
      <h1 style="font-size: 1em; color: #f5f5f5; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-weight: 600; letter-spacing: 1px; margin: 20px 0;">Comprehensive Autonomous Driving System</h1>
      <nav class="nav-bar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">Project</router-link>
        <router-link to="/timeline" class="nav-link">Timeline</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1>The Future of Driving Technology</h1>
        <p>Advanced autonomous vehicle system powered by AI and Machine Learning</p>
        <a href="dashboard.html" class="demo-button">View Demo</a>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="feature-card">
        <h3>Safe Journey</h3>
        <p>Advanced safety features with AI-powered decision-making capabilities</p>
      </div>
      <div class="feature-card">
        <h3>Real-time Mapping</h3>
        <p>Precise navigation with advanced sensors and GPS technology</p>
      </div>
      <div class="feature-card">
        <h3>Smart Decisions</h3>
        <p>Intelligent decision-making powered by machine learning algorithms</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoFeed'
}
</script>

<style scoped>
.main-container {
  margin: 0;
  min-height: 100vh;
  background-color: #121212;
}

.title-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1a1a1a;
  padding:0 0;
  text-align: center;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.nav-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #333;
}

.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Car.png');
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
              url('/Car.png') center/cover;
  color: white;
  text-align: center;
  margin-top: 80px;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.demo-button {
  display: inline-block;
  padding: 15px 40px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.2em;
  transition: all 0.3s ease;
}

.demo-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 50px 20px;
  background-color: #1a1a1a;
}

.feature-card {
  background: linear-gradient(145deg, #222, #333);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  color: white;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #4CAF50;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2em;
  }
  
  .hero-content p {
    font-size: 1em;
  }
  
  .features-section {
    grid-template-columns: 1fr;
  }
}
</style>