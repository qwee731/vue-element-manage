<template>
  <div class="home">
    <div class="wrapper">
      <div class="main">
        <blogList></blogList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import blogList from "@/components/blogList";
export default {
  name: "Home",
  components: { blogList }
};
</script>
<style lang="scss" scoped>
.main {
  margin: 0 20px;
  padding: 20px;
  background: #f8f8fd;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(10, 10, 0, 0.1) insert;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) insert;
}
</style>