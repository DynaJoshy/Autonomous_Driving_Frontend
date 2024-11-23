<template>
  <div class="container">
    <!-- Left Side: UI Section -->
    <div class="ui-section">
      <div class="video-monitor">
        <h3>Video Feed</h3>
        <div class="monitor-frame">
          <div class="monitor-screen">
            <template v-if="isRealTime">
              <p>Streaming real-time video...</p>
            </template>
            <template v-else>
              <p>
                Live video from the autonomous vehicle's camera will be
                displayed here.
              </p>
            </template>
          </div>
          <div class="monitor-stand"></div>
        </div>

        <!-- Video Upload or Real-Time Video Toggle -->
        <div class="upload-section">
          <button @click="toggleVideoMode" class="toggle-button">
            Switch to {{ isRealTime ? 'Upload Video' : 'Real-Time Video' }}
          </button>
          <template v-if="!isRealTime">
            <label for="video-upload" class="upload-button">
              Upload Video
              <input
                type="file"
                id="video-upload"
                accept="video/*"
                @change="handleVideoUpload"
                hidden
              />
            </label>
            <p v-if="uploadedVideo" class="uploaded-video-name">
              Uploaded: {{ uploadedVideo }}
            </p>
          </template>
        </div>
      </div>

      <!-- Decisions Monitor -->
      <div class="decision-monitor">
        <h3>Decisions</h3>
        <p class="decision-item">
          {{ currentDecision }}
        </p>
      </div>
    </div>

    <!-- Right Side: Background Video -->
    <div class="background-section">
      <video
        v-if="backgroundVideo"
        :src="backgroundVideo"
        autoplay
        loop
        muted
        class="background-video"
      ></video>
      <template v-else>
        <div class="placeholder">
          <p>No background video uploaded.</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import backgroundVideoFile from '../assets/car.mp4';

export default {
  name: 'VideoFeed',
  data() {
    return {
      uploadedVideo: null, // Name of the uploaded video file
      decisions: [
        'Detecting obstacles on the road...',
        'Slowing down due to traffic ahead...',
        'Changing lanes to avoid collision...',
        'Adjusting speed to match traffic flow...',
        'Monitoring vehicle surroundings...',
        'Identifying traffic lights...',
        'Detecting pedestrians nearby...',
        'Calculating alternate route...',
        'Engaging emergency brakes...',
        'Resuming normal speed...',
      ],
      currentDecisionIndex: 0, // Index of the currently displayed decision
      isRealTime: false, // Toggle between video upload and real-time video
      backgroundVideo: backgroundVideoFile, // URL of the uploaded video
    };
  },
  computed: {
    currentDecision() {
      return this.decisions[this.currentDecisionIndex];
    },
  },
  methods: {
    handleVideoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedVideo = file.name;
        this.backgroundVideo = URL.createObjectURL(file); // Set video as background
      }
    },
    toggleVideoMode() {
      this.isRealTime = !this.isRealTime;
    },
    cycleDecisions() {
      this.currentDecisionIndex =
        (this.currentDecisionIndex + 1) % this.decisions.length;
    },
  },
  mounted() {
    // Cycle through decisions every 3 seconds
    setInterval(this.cycleDecisions, 3000);
  },
};
</script>

<style scoped>
/* Global Styles to Remove Any Default Margin or Padding */

/* Main Container */
.container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Left Side: UI Section */
.ui-section {
  flex: 1;
  padding: 20px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  overflow: auto;
}

/* Right Side: Background Video Section */
.background-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 18px;
}

/* Video Monitor */
.video-monitor {
  flex: 2;
  background: linear-gradient(145deg, #222, #333);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.monitor-frame {
  width: 100%;
  max-width: 600px;
  background: #333;
  border: 6px solid #444;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
}

.monitor-screen {
  width: 100%;
  height: 300px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
}

.monitor-stand {
  width: 80px;
  height: 20px;
  background: #444;
  margin: 10px auto 0;
  border-radius: 4px;
}
.upload-section {
  margin-top: 30px;  /* बटन को नीचे की तरफ खिसकाने के लिए मार्जिन जोड़ा */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;  /* बटन्स के बीच स्पेसिंग */
}

/* Toggle Button */
.toggle-button {
  background-color: #555;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}


.toggle-button:hover {
  background-color: #666;
}

/* Decisions Monitor */
.decision-monitor {
  flex: 1;
  background: linear-gradient(145deg, #333, #444);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  color: #ddd;
}

/* Custom Scrollbar Styling */
.ui-section::-webkit-scrollbar {
  width: 8px;
}

.ui-section::-webkit-scrollbar-track {
  background: #1a1a1a;
  border-radius: 4px;
}

.ui-section::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.ui-section::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* Firefox के लिए स्क्रॉलबार स्टाइलिंग */
.ui-section {
  scrollbar-width: thin;
  scrollbar-color: #444 #1a1a1a;
}
</style>
