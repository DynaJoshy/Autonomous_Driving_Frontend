<template>
  <div id="app">
    <video-feed />
  </div>
</template>

<script>
import VideoFeed from './components/VideoFeed.vue';

export default {
  name: 'App',
  components: {
    VideoFeed,
  },
};
</script>

<style>
/* Global styles for background and layout */
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
