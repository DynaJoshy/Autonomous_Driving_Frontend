<template>
  <div class="video-grid-container">
    <div class="title-section">
      <h1>Video Representation</h1>
      <nav class="nav-bar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/video-feed" class="nav-link">Video Feed</router-link>
        <router-link to="/video-grid" class="nav-link">Video Grid</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/timeline" class="nav-link">Timeline</router-link>
        <router-link to="/motivation" class="nav-link">Motivation</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>

    <div class="video-grid">
      <div v-for="index in 5" :key="index" class="video-column">
        <div class="video-set">
          <div class="video-card">
            <h3>Semantic Video {{ index }}</h3>
            <video
              :src="`/sv/S${index}.mp4`"
              controls
              class="video-player"
            ></video>
          </div>
          
          <div class="video-card">
            <h3>Decision Video {{ index }}</h3>
            <video
              :src="`/dv/DM_${index}.mp4`"
              controls
              class="video-player"
            ></video>
          </div>
          
          <div class="video-card">
            <h3>Output Video {{ index }}</h3>
            <video
              :src="`/ov/0${index}.mp4`"
              controls
              class="video-player"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGrid'
}
</script>

<style scoped>
.video-grid-container {
  background-color: #121212;
  min-height: 100vh;
  padding-top: 80px;
  color: white;
}

.title-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1a1a1a;
  padding: 15px 0;
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

.video-grid {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;
  overflow-x: auto;
}

.video-column {
  flex: 1;
  min-width: 300px;
}

.video-set {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.video-card {
  background: linear-gradient(145deg, #222, #333);
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.video-card h3 {
  margin-bottom: 10px;
  color: #4CAF50;
  text-align: center;
}

.video-player {
  width: 100%;
  border-radius: 8px;
  background-color: #000;
}

/* Responsive Design */
@media (max-width: 1600px) {
  .video-grid {
    flex-wrap: wrap;
  }
  
  .video-column {
    flex: 0 0 calc(33.333% - 20px);
  }
}

@media (max-width: 1200px) {
  .video-column {
    flex: 0 0 calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .video-column {
    flex: 0 0 100%;
  }
}
</style> 