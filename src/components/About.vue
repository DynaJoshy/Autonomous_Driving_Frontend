<template>
  <div class="page-container">
    <div class="title-section">
      <h1 style="color: white;">Infosys Springboard Internship : <span class="version">5.0</span></h1>
      <nav class="nav-bar">
        <router-link to="/" class="nav-link">Home</router-link>
        <!-- <router-link to="/video-feed" class="nav-link">Video Feed</router-link> -->
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/motivation" class="nav-link">Motivation</router-link>  
        <router-link to="/timeline" class="nav-link">Timeline</router-link>
       
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>
    <div class="content-wrapper">
      <h2 class="section-title fade-in">About Us</h2>
      <div class="chess-grid">
        <div class="info-card slide-up position-1" style="animation-delay: 0.1s">
          <h3>Project Overview</h3>
          <p style="color: white;">An autonomous driving system built using basic deep learning (DL) and machine learning (ML) models focuses on enabling a vehicle to navigate and make decisions without human intervention.. Basic ML models, such as decision trees and SVMs, are used for tasks like object detection, classification, and lane tracking. Deep learning models, particularly convolutional neural networks (CNNs), are leveraged for image recognition to identify road signs, pedestrians, and other vehicles. The system integrates these models to continuously interpret the environment and make real-time driving decisions. While these models may not achieve the full complexity of advanced systems, they offer a foundation for autonomous driving in controlled environments.</p>
        </div>
        
        <div class="info-card slide-up position-2" style="animation-delay: 0.2s">
          <h3>Technology Stack</h3>
          <ul>
            <li>Vue.js for Frontend</li>
            <li>Tensorflow  and Keras for Model Development</li>
      
            <li>OpenCV for Computer Vision</li>
          </ul>
        </div>
  
        <div class="info-card slide-up position-3" style="animation-delay: 0.3s">
          <h3>Key Features</h3>
          <ul>
            <li>Real-time object detection</li>
            <li>Path planning algorithms</li>
            <li>Traffic sign recognition</li>
            <li>Semantic Segmentation</li>
          </ul>
        </div>
  
        <div class="info-card slide-up position-4" style="animation-delay: 0.4s">
          <h3>Team Members</h3>
          <ul>
            <li><b style="color: yellowgreen;">Project Guide</b> : Mr. Nitig Singh</li>
            <li><b style="color: yellowgreen;">Project Lead</b>: Faraz,Dyna,Rameshwari,Neela Sai</li>
            <li><b style="color: yellowgreen;">Co-Leads</b>: Srinithi,SriJishnu, Raju</li>
            <li><b style="color: yellowgreen;">Team Members</b>: Nitesh Kumar, Kishore Kumar, Parvinder Kumar, Adars, Rakshita, Abhishek, Shivanand, Pnv Sai, Deekshitha, Anirwin</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: #121212;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/About.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.content-wrapper {
  padding-top: 100px;
  padding: 100px 20px 20px 20px;
}

.section-title {
  color: white;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
}

.chess-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.info-card {
  background: linear-gradient(145deg, #222, #333);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

/* Diagonal Positioning */
.position-1 {
  transform: translate(-20px, -20px);
}

.position-2 {
  transform: translate(20px, -10px);
}

.position-3 {
  transform: translate(-20px, 10px);
}

.position-4 {
  transform: translate(20px, 20px);
}

/* Hover Effects */
.info-card:hover {
  transform: scale(1.05) translateZ(20px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

/* Enhanced 3D Effect */
.chess-grid {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.info-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Staggered Animation */
@keyframes slideUpDiagonal {
  from {
    opacity: 0;
    transform: translate(var(--x), var(--y)) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(var(--x), var(--y)) scale(1);
  }
}

.slide-up {
  animation: slideUpDiagonal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.position-1 { --x: -20px; --y: -20px; }
.position-2 { --x: 20px; --y: -10px; }
.position-3 { --x: -20px; --y: 10px; }
.position-4 { --x: 20px; --y: 20px; }

/* Responsive Design */
@media (max-width: 768px) {
  .chess-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .info-card {
    transform: none !important;
  }

  .position-1, .position-2, .position-3, .position-4 {
    --x: 0;
    --y: 0;
  }
}

/* Card Content Styles */
.info-card h3 {
  color: #4CAF50;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.info-card ul {
  list-style-type: none;
  padding: 0;
}

.info-card li {
  color: #ddd;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  padding-left: 15px;
  position: relative;
  font-size: 1.2em;
}

/* Enhanced Hover Effects */
.info-card:hover {
  background: linear-gradient(145deg, #2a2a2a, #3a3a3a);
}

.info-card:hover h3::after {
  width: 100%;
}

.info-card:hover li {
  transform: translateX(5px);
}

/* Depth Effect */
.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(255,255,255,0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover::before {
  opacity: 1;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .info-card {
    transform: none !important;
    transition: none !important;
  }
  
  .slide-up {
    animation: none !important;
    opacity: 1;
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

/* Animation Keyframes */
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation Classes */
.slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.scale-in {
  animation: scaleIn 0.5s ease-out forwards;
  opacity: 0;
}

/* Card Hover Effects */
.info-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  background: linear-gradient(145deg, #2a2a2a, #3a3a3a);
}

/* List Item Hover Effects */
li {
  transition: all 0.3s ease;
  position: relative;
  padding-left: 5px;
}

li:hover {
  color: #4CAF50;
  transform: translateX(5px);
}

li:before {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  width: 0;
  height: 2px;
  background: #4CAF50;
  transition: all 0.3s ease;
}

li:hover:before {
  width: 10px;
}

/* Heading Animation */
h3 {
  position: relative;
  display: inline-block;
}

h3:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4CAF50;
  transition: width 0.3s ease;
}

.info-card:hover h3:after {
  width: 100%;
}

/* Responsive Animations */
@media (max-width: 768px) {
  .slide-up {
    animation-duration: 0.4s;
  }
  
  .info-card:hover {
    transform: translateY(-3px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide-up, .fade-in, .scale-in {
    animation: none;
    opacity: 1;
  }
  
  .info-card:hover {
    transform: none;
  }
}
</style>