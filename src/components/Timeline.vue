<template>
    <div class="timeline-container">
      <!-- Title Section -->
      <div class="title-section">
        <h1>Infosys Springboard Internship <span class="version">5.0</span></h1>
        <nav class="nav-bar">
          <router-link to="/" class="nav-link">Home</router-link>
          <!-- <router-link to="/video-feed" class="nav-link">Video Feed</router-link> -->
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/motivation" class="nav-link">Motivation</router-link>     

          <router-link to="/timeline" class="nav-link">Timeline</router-link>
               <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
  
      <div class="content">
        <!-- <h2>Project Timeline</h2> -->
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timelineItems" 
               :key="index"
               :class="{ 'appear': true }"
               :style="{ animationDelay: `${index * 0.3}s` }">
            <div class="timeline-dot"></div>
            <div class="timeline-content" 
                 :class="{ 'slide-in': true, 'from-left': index % 2 === 0, 'from-right': index % 2 !== 0 }">
              <h3>{{ item.title }}</h3>
              <p class="date">{{ item.date }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Timeline',
    data() {
      return {
        timelineItems: [
          {
            title: 'Project Initiation',
            date: 'September 2024',
            description: 'Project kickoff and initial planning phase'
          },
          {
            title: 'Design Phase',
            date: 'November 2024',
            description: 'UI/UX design and system architecture planning'
          },
          {
            title: 'Development',
            date: 'September 2024',
            description: 'Core functionality implementation'
          },
          {
            title: 'Testing',
            date: 'October 2024',
            description: 'Model testing and bug fixes'
          },
          {
            title: 'Deployment',
            date: 'November 2024',
            description: 'Final deployment and project presentation'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .timeline-container {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/4.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    background-color: #121212;
    color: white;
    padding-top: 80px;
  }
  
  .content {
    margin-top: 2em;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .timeline {
    margin-top: 2em;
    position: relative;
    padding: 20px 0;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background-color: #4CAF50;
    animation: lineGrow 2s ease-out forwards;
  }
  
  .timeline-item {
    opacity: 0;
    animation: appear 0.5s ease-out forwards;
    margin-bottom: 40px;
    position: relative;
    width: 100%;
  }
  
  .timeline-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #4CAF50;
    border: 3px solid #121212;
    animation: dotPulse 2s infinite;
  }
  
  .timeline-content {
    background: linear-gradient(145deg, #222, #333);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width: calc(50% - 30px);
  }
  
  .timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background: linear-gradient(145deg, #2a2a2a, #3a3a3a);
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
  }
  
  .date {
    color: #4CAF50;
    font-size: 0.9em;
    font-weight: 500;
    margin: 5px 0;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  .timeline-content:hover .date {
    opacity: 1;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 40px;
    color: #fff;
  }
  
  h3 {
    color: white;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
  }
  
  h3::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4CAF50;
    transition: width 0.3s ease;
  }
  
  .timeline-content:hover h3::after {
    width: 100%;
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
  
  /* Timeline Animation Keyframes */
  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes slideFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideFromRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes dotPulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
    }
    70% {
      transform: scale(1.1);
      box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    }
  }
  
  @keyframes lineGrow {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
  
  /* Timeline Item Animations */
  .timeline-content.slide-in.from-left {
    animation: slideFromLeft 0.5s ease-out forwards;
  }
  
  .timeline-content.slide-in.from-right {
    animation: slideFromRight 0.5s ease-out forwards;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .timeline::before {
      left: 30px;
    }
  
    .timeline-dot {
      left: 30px;
    }
  
    .timeline-content {
      width: calc(100% - 70px);
      margin-left: 70px;
    }
  
    .timeline-item:nth-child(odd) .timeline-content,
    .timeline-item:nth-child(even) .timeline-content {
      margin-left: 70px;
    }
  }
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    .timeline-item,
    .timeline-content,
    .timeline-dot,
    .timeline::before {
      animation: none !important;
      transition: none !important;
    }
  }
  </style>