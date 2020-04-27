<template>
  <div class="continer">
    <comonHeader></comonHeader>
    <router-view></router-view>
    <comonFooter class="footer"></comonFooter>
  </div>
</template>

<script>
import comonHeader from "@/components/comomHeader";
import comonFooter from "@/components/commonFooter";
export default {
  components: {
    comonHeader,
    comonFooter
  }
};
</script>


<style scoped lang="scss">
.footer {
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 15px 0;
  background: #2d2d2d;
  color: #bbb;
  box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.5);
}
</style>
