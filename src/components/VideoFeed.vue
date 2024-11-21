<template>
  <div class="container">
    <!-- Left Side: UI Section -->
    <div class="ui-section">
      <div class="video-monitor">
        <h3>Video Feed</h3>
        <div class="monitor-frame">
          <div class="monitor-screen">
            <p>
              Live video from the autonomous vehicle's camera will be displayed
              here.
            </p>
          </div>
          <div class="monitor-stand"></div>
        </div>
        <!-- Video Upload -->
        <div class="upload-section">
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
        </div>
      </div>

      <!-- Decisions Monitor -->
      <div class="decision-monitor">
        <h3>Decisions</h3>
        <ul>
          <li
            v-for="(decision, index) in decisions"
            :key="index"
            class="decision-item"
          >
            {{ decision }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Right Side: Background Image -->
    <div class="background-section">
      <img
        src="https://lh3.googleusercontent.com/gg/ACM6BIua7qZBDeCM8vB_Y1kxRGchzJzFPRIVmFnYXxrGC5u3o0nf6-87K08XHtUuQak7G8cl8KQqGZlxdsQ6ODKDQWcbLvc-4vOYnbSp0E6xEWN7eGMTCCitJKYOE3Byby9gLTgpVMY177grGy2uaP3aSHAf2Skv4h0mwkET5UGiYD2wFqwpzOo"
        alt="Background"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoFeed',
  data() {
    return {
      uploadedVideo: null, // Holds the name of the uploaded video file
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
    };
  },
  methods: {
    handleVideoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedVideo = file.name; 
        
      }
    },
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
  padding: 100;
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
  box-sizing: border-box;
  color: white;
  overflow: auto;
}

/* Right Side: Background Image Section */
.background-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.background-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Video Monitor */
.video-monitor {
  flex: 2;
  background: linear-gradient(145deg, #222, #333);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.monitor-frame {
  width: 100%;
  max-width: 600px;
  background: #333;
  border: 6px solid #444;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
  position: relative;
  margin: 0 auto;
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
  font-style: italic;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
}

.monitor-stand {
  width: 80px;
  height: 20px;
  background: #444;
  margin: 10px auto 0;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
}

/* Decisions Monitor */
.decision-monitor {
  flex: 1;
  background: linear-gradient(145deg, #333, #444);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  overflow-y: auto;
}

.decision-monitor ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.decision-monitor li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #555;
  border-radius: 8px;
  color: #ddd;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.decision-monitor li:hover {
  background-color: #666;
  transform: scale(1.02);
}
</style>
