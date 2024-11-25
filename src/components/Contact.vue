<template>
    <div class="contact-container">
      <!-- Title Section -->
      <div class="title-section">
        <h1>Infosys Springboard Internship : 5.0</h1>
        <nav class="nav-bar">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/video-feed" class="nav-link">Video Feed</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/timeline" class="nav-link">Timeline</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
  
      <div class="content">
        <!-- <h2>Contact Us</h2> -->
        <div class="contact-grid">
          <div class="contact-form">
            <h3>Send us a message</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
  
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
  
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" required></textarea>
              </div>
  
              <button type="submit">Send Message</button>
            </form>
          </div>
  
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>Sample 123</p>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <p>contact@project.com</p>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <p>+1 234 567 8900</p>
            </div>
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-github"></i></a>
              <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Handle form submission here
        console.log('Form submitted:', this.form)
        // Reset form
        this.form = {
          name: '',
          email: '',
          message: ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-container {
    min-height: 100vh;
    background-color: #121212;
    color: white;
    padding-top: 80px;
  }
  
  .content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 20px;
  }
  
  .contact-form, .contact-info {
    background: linear-gradient(145deg, #222, #333);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #ddd;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    background-color: #444;
    border: none;
    border-radius: 4px;
    color: white;
  }
  
  textarea {
    height: 120px;
    resize: vertical;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .info-item i {
    margin-right: 15px;
    color: #4CAF50;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
  }
  
  .social-link {
    color: white;
    font-size: 24px;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: #4CAF50;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
  }
  
  h3 {
    color: #4CAF50;
    margin-bottom: 20px;
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