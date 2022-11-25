<script setup lang="ts">
import { ref } from "vue";

const speed = ref(100);
const cool = ref(80);
const ads = ref(false);
const graphs = ref(true);
</script>

<template>
  <div class="slider-demo-block">
    <span class="demonstration">Website speed</span>
    <el-slider v-model="speed" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Cool factor</span>
    <el-slider v-model="cool" />
  </div>

  <el-switch v-model="ads" inactive-text="Ads" />
  <el-switch
    active-text="Graphs"
    v-model="graphs"
    class="ml-2"
    style="margin-left: 8px"
  />

  <div class="demo-collapse">
    <el-collapse>
      <el-collapse-item title="Simplicity" name="1">
        <div>
          Websites ought to be simple. The most important content should be
          front and foremost
        </div>
      </el-collapse-item>
      <el-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style>
.demo-collapse {
  margin-top: 8px;
}
</style>
