<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValues from '../components/CounterOptionsValues.vue';


const counterStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(counterStore);
</script>

<template>
  <h1>Counter | Options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  <br>
  <button @click="counterStore.increment()">+1</button>
  <button @click="counterStore.incrementBy(2)">+2</button>
  <button @click="counterStore.incrementBy(5)">+5</button>
  <button @click="counterStore.$reset()">Reset</button>
  <br><br>
  <CounterOptionsValues/>
</template>

<style scoped>
button {
  margin-right: 5px;
}
</style>
