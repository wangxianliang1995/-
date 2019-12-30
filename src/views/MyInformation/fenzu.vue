<template>
  <div class="root">
    <img :src="image" alt="" @error="showdefaultimage()">
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'),
      defaultImg: require('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
    }
  },
  mounted() {
  },
  methods: {
     showdefaultimage() {
       let img = event.srcElement;
       img.src = this.defaultImg;
       img.onerror = null; //防止闪图
    }
  }
};
</script>
<style lang="stylus" scoped>
.root {
  margin: 20px 100px;
  width: 80%;
  height: 60%;
  border: 1px solid red;
}
</style>

