<template>
  <div class="main-container">
    <!-- Title and Navigation Section -->
    <div class="title-section">
      <h1 style="font-size: 1.5em; color: whitesmoke;">Infosys Springboard Internship : 5.0</h1>
      <nav class="nav-bar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/timeline" class="nav-link">Timeline</router-link>
        <router-link to="/motivation" class="nav-link">Motivation</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>

    <!-- Main Content Container -->
    <div class="content-wrapper">
      <div class="container">
        <!-- Left Side: UI Section -->
        <div class="ui-section">
          <div class="video-monitor">
            <div class="monitor-frame">
              <div class="monitor-screen">
                <video
                  v-if="currentSemanticVideo"
                  :src="currentSemanticVideo"
                  autoplay
                  muted
                  loop
                  class="semantic-video"
                  ref="semanticVideoPlayer"
                  @loadeddata="changeVideo"
                  @error="(e) => console.error('Semantic video error:', e)"
                ></video>
                <p v-else>Loading semantic video...</p>
              </div>
              <div class="monitor-stand"></div>
            </div>

            <!-- Video Selection Section -->
            <div class="video-controls">
              <select v-model="selectedVideoIndex" @change="changeVideo" class="video-selector">
                <option v-for="(_, index) in semanticVideos" :key="index" :value="index">
                  Semantic Video {{ index + 1 }}
                </option>
              </select>
            </div>
          </div>

          <!-- Decisions Monitor -->
          <div class="decision-monitor">
            <h3>Decisions & Location</h3>
            <div class="map-container">
              <div id="map" ref="mapRef"></div>
            </div>
            <div class="decision-video-container">
              <video
                v-if="currentDecisionVideo"
                :src="currentDecisionVideo"
                autoplay
                class="decision-video"
                ref="decisionVideoPlayer"
              ></video>
              <p v-else>Loading decision video...</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Background Section -->
        <div class="background-section">
          <div class="output-video-container">
            <video
              v-if="currentOutputVideo"
              :src="currentOutputVideo"
              autoplay
              class="output-video"
              ref="outputVideoPlayer"
            ></video>
            <p v-else>Loading output video...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// सीधे वीडियो फाइल्स इम्पोर्ट करें
import semanticVideo1 from '/sv/S1.mp4'
import semanticVideo2 from '/sv/S2.mp4'
import semanticVideo3 from '/sv/S3.mp4'
import semanticVideo4 from '/sv/S4.mp4'
import semanticVideo5 from '/sv/S5.mp4'

import decisionVideo1 from '/dv/DM_1.mp4'
import decisionVideo2 from '/dv/DM_2.mp4'
import decisionVideo3 from '/dv/DM_3.mp4'
import decisionVideo4 from '/dv/DM_4.mp4'
import decisionVideo5 from '/dv/DM_5.mp4'

import outputVideo1 from '/ov/01.mp4'
import outputVideo2 from '/ov/02.mp4'
import outputVideo3 from '/ov/03.mp4'
import outputVideo4 from '/ov/04.mp4'
import outputVideo5 from '/ov/05.mp4'

export default {
  name: 'VideoFeed',
  data() {
    return {
      selectedVideoIndex: 0,
      semanticVideos: [
        semanticVideo1,
        semanticVideo2,
        semanticVideo3,
        semanticVideo4,
        semanticVideo5
      ],
      decisionVideos: [
        decisionVideo1,
        decisionVideo2,
        decisionVideo3,
        decisionVideo4,
        decisionVideo5
      ],
      map: null,
      markers: [],
      dummyLocations: [
        { lat: 12.9716, lng: 77.5946, title: 'Bangalore' }, // बैंगलोर की लोकेशन
        { lat: 13.0827, lng: 80.2707, title: 'Chennai' },   // चेन्नई की लोकेशन
        { lat: 17.3850, lng: 78.4867, title: 'Hyderabad' }  // हैदराबाद की लोकेशन
      ]
    }
  },
  computed: {
    currentSemanticVideo() {
      return this.semanticVideos[this.selectedVideoIndex]
    },
    currentDecisionVideo() {
      return this.decisionVideos[this.selectedVideoIndex]
    }
  },
  methods: {
    changeVideo() {
      this.$nextTick(() => {
        const semanticVideo = this.$refs.semanticVideoPlayer;
        const decisionVideo = this.$refs.decisionVideoPlayer;
        
        if (semanticVideo) {
          semanticVideo.load();
          const playPromise = semanticVideo.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Semantic video playback failed:", error);
            });
          }
        }
        
        if (decisionVideo) {
          decisionVideo.load();
          const playPromise = decisionVideo.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Decision video playback failed:", error);
            });
          }
        }
      });
    },
    initMap() {
      // मैप इनिशियलाइज़ करें
      const mapOptions = {
        center: { lat: 12.9716, lng: 77.5946 }, // बैंगलोर को सेंटर में रखें
        zoom: 6,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [{ "color": "#242f3e" }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#242f3e" }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#746855" }]
          }
        ]
      };

      this.map = new google.maps.Map(this.$refs.mapRef, mapOptions);
      
      // डमी मार्कर्स जोड़ें
      this.dummyLocations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map,
          title: location.title
        });
        
        this.markers.push(marker);
      });
    },
    updateMapLocation() {
      // वीडियो चेंज होने पर मैप अपडेट करें
      if (this.map && this.dummyLocations[this.selectedVideoIndex]) {
        const newLocation = this.dummyLocations[this.selectedVideoIndex];
        this.map.panTo({ lat: newLocation.lat, lng: newLocation.lng });
        this.map.setZoom(12);
      }
    }
  },
  mounted() {
    // कंपोनेंट माउंट होने पर वीडियो प्ले करें
    this.$nextTick(() => {
      this.changeVideo();
    });
    // Google Maps लोड होने के बाद मैप इनिशियलाइज़ करें
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      window.initMap = this.initMap;
    }
  },
  watch: {
    // वीडियो सोर्स बदलने पर नया वीडियो प्ले करें
    selectedVideoIndex() {
      this.changeVideo();
      this.updateMapLocation();
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 2em;
  min-height: 100vh;
  background-color: #121212;
  padding-top: 80px;
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

.content-wrapper {
  height: calc(100vh - 80px);
  overflow: hidden;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.ui-section {
  flex: 1;
  padding: 20px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow-y: auto;
}

.video-monitor {
  background: linear-gradient(145deg, #222, #333);
  border-radius: 12px;
  padding: 20px;
}

.monitor-frame {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #333;
  border: 6px solid #444;
  border-radius: 12px;
}

.monitor-screen {
  width: 100%;
  height: 500px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.semantic-video, .decision-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.monitor-stand {
  width: 80px;
  height: 20px;
  background: #444;
  margin: 10px auto 0;
  border-radius: 4px;
}

.video-controls {
  margin-top: 20px;
  text-align: center;
}

.video-selector {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.decision-monitor {
  background: linear-gradient(145deg, #222, #333);
  border-radius: 12px;
  padding: 30px;
  color: white;
  height: 600px;
  margin-bottom: 20px;
  overflow: auto;
}

.decision-video-container {
  width: 100%;
  height: 300px;
  background: #111;
  margin-top: 15px;
  border-radius: 8px;
  overflow: hidden;
}

.background-section {
  flex: 1;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder {
  color: #666;
  text-align: center;
}

.output-video-container {
  width: 100%;
  height: 100vh;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 300px;
  margin: 15px 0;
  border-radius: 8px;
  overflow: hidden;
}

#map {
  width: 100%;
  height: 100%;
  background: #242f3e;
}
</style>