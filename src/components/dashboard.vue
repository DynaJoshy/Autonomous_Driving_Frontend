<template>
    <div>
      <h1>Select Video</h1>
      <div class="dropdown">
        <select id="videoSelect" @change="changeVideos">
          <option value="1">Video 1</option>
          <option value="2">Video 2</option>
          <option value="3">Video 3</option>
          <option value="4">Video 4</option>
          <option value="5">Video 5</option>
        </select>
      </div>
  
      <div class="headings">
        <h2>Decision Making</h2>
        <h2>Semantic Segmentation</h2>
        <h3>Output Detection</h3>
      </div>
  
      <div class="video-container">
        <div class="video">
          <video id="dmVideo" controls>
            <source :src="'videos/dm/dm' + selectedVideo + '.mp4'" type="video/mp4">
          </video>
        </div>
        <div class="video">
          <video id="ssVideo" controls>
            <source :src="'videos/ss/ss' + selectedVideo + '.mp4'" type="video/mp4">
          </video>
        </div>
        <div class="video">
          <video id="odVideo" controls>
            <source :src="'videos/od/od' + selectedVideo + '.mp4'" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedVideo: 1,
      };
    },
    methods: {
      changeVideos(event) {
        this.selectedVideo = event.target.value;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles from dashboard.html */
  </style>
  