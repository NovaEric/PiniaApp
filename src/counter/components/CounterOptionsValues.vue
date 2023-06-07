<script setup lang="ts">

import { useCounterOptionsStore } from '@/store/counter-options';

const counter = useCounterOptionsStore();

</script>

<template>
    <div>
        <h1>The Value is: {{ counter.count }}</h1>
        <h4>Last changed: {{ counter.lastChanged }}</h4>
    </div>
</template>

<style scoped>

</style>