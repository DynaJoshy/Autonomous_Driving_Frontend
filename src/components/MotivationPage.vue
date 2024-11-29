<template>
  <div class="motivation-container">
    <!-- Background Video -->
    <div class="background-video-container">
      <video
        class="background-video"
        autoplay
        loop
        muted
        playsinline
        :src="backgroundVideo"
        @error="handleVideoError"
      ></video>
      <div class="overlay"></div>
    </div>

    <!-- Header Section -->
    <div class="title-section">
      <h1 style="color: white;">Infosys Springboard Internship : <span class="version">5.0</span></h1>
      <nav class="nav-bar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/motivation" class="nav-link">Motivation</router-link>   
        <router-link to="/timeline" class="nav-link">Timeline</router-link>     
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>

    <!-- Content Section -->
    <div class="content">
      <!-- Quotes Section -->
      <div class="page-title fade-in">
        <h2 style="margin-top: 2em;">Path to Success</h2>
        <p class="subtitle">Every day is a new beginning</p>
      </div>

      <!-- Motivational Cards Grid -->
      <div class="motivation-grid">
        <div v-for="(item, index) in motivationalItems" 
             :key="index" 
             class="motivation-card"
             :style="{ animationDelay: `${index * 0.2}s` }">
          <div class="card-image">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p class="quote">"{{ item.quote }}"</p>
            <p class="author">- {{ item.author }}</p>
          </div>
        </div>
      </div>

      <!-- News Section -->
      <div class="news-section fade-in">
        <h2>Latest in Autonomous Driving</h2>
        <p class="subtitle">Industry News & Breakthroughs</p>

        <div class="news-grid">
          <div v-for="(news, index) in newsItems" 
               :key="index"
               class="news-card"
               :style="{ animationDelay: `${index * 0.15}s` }">
            <img :src="news.image" :alt="news.title">
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p class="source">{{ news.source }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MotivationPage',
  data() {
    return {
      backgroundVideo: '/videos/motivation-bg.mp4',
    
      motivationalItems: [
        {
          title: 'Safety First',
          quote: 'The future of mobility lies not just in movement, but in moving safely and intelligently.',
          author: 'Sebastian Thrun, Waymo Co-founder',
          image: '../public/3.jpeg'
        },
        {
          title: 'AI Revolution',
          quote: 'Autonomous vehicles are not just about replacing drivers, they are about reimagining transportation for humanity.',
          author: 'Chris Urmson, Aurora CEO',
          image: '../public/2.jpeg'
        },
        {
          title: 'Smart Cities',
          quote: 'Self-driving cars will enable cities to be redesigned around humans, not parking spaces.',
          author: 'Dan Ammann, Former Cruise CEO',
          image: '../public/5.jpeg'
        },
        {
          title: 'Future Mobility',
          quote: 'The goal of autonomous vehicles is not perfection, but to be significantly safer than human drivers.',
          author: 'Elon Musk, Tesla CEO',
          image: '../public/4.jpeg'
        }
      ],
      newsItems: [
        {
          title: "Tesla's Autopilot Achieves New Safety Milestone",
          source: 'Reuters Technology',
          image: '../public/6.png'
        },
        {
          title: 'Waymo Expands Autonomous Ride Service',
          source: 'Wired Magazine',
          image: '../public/9.png'
        },
        {
          title: "NVIDIA's AI Breakthrough in Self-Driving Tech",
          source: 'ZDNet Technology News',
          image: '../public/8.png'
        },
        {
          title: "Ford's Investment in Autonomous Future",
          source: 'CNET Auto News',
          image: '../public/7.png'
        }
      ]
    }
  },
  methods: {
    handleVideoError() {
      console.warn('Video loading error, switching to fallback');
      this.backgroundVideo = this.fallbackVideo;
    }
  }
}
</script>

<style scoped>
/* Container Styles */
.motivation-container {
  min-height: 100vh;
  position: relative;
  color: white;
}

/* Background Video */
.background-video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}

/* Content Styles */
.content {
  padding: 80px 20px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Page Title */
.page-title {
  text-align: center;
  margin-bottom: 50px;
}

.page-title h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.subtitle {
  color: #4CAF50;
  font-size: 1.2em;
}

/* Motivation Grid */
.motivation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.motivation-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  animation: slideUp 0.5s ease-out forwards;
  opacity: 0;
}

.motivation-card:hover {
  transform: translateY(-10px);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.quote {
  font-style: italic;
  margin: 15px 0;
}

.author {
  color: #4CAF50;
}

/* News Section */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.news-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: slideUp 0.5s ease-out forwards;
  opacity: 0;
}

.news-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.news-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-content {
  padding: 15px;
}

.source {
  color: #4CAF50;
  font-size: 0.9em;
  margin-top: 5px;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title h2 {
    font-size: 2em;
  }
  
  .motivation-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .content {
    padding: 60px 15px 15px;
  }
}
/* Title Section Styles */
.title-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #1a1a1a;
    padding: 10px 0 15px 0;
    text-align: center;
    z-index: 100;
  }
  
  .nav-bar {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .nav-link:hover {
    background-color: #333;
  }
  
  .router-link-active {
    background-color: #444;
  }
</style>