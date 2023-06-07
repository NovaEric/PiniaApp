<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/counter-setup';
import CounterSetupValues from '@/counter/components/CounterSetupValues.vue';

const counterStore = useCounterSetupStore();
const { count, squareCount } = storeToRefs(counterStore);
</script>

<template>
  <h1>Counter | Setup</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  <br>
  <button @click="counterStore.increment()">+1</button>
  <button @click="counterStore.incrementBy(2)">+2</button>
  <button @click="counterStore.incrementBy(5)">+5</button>
  <button @click="counterStore.$reset()">Reset</button>
  <br><br>
  <CounterSetupValues/>
</template>

<style scoped>
button {
  margin-right: 5px;
}
</style>
