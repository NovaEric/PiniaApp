<script setup lang="ts">
import { useCounterSetupStore } from '../../store/counter-setup';

const counter = useCounterSetupStore();

</script>

<template>
    <div>
        <h1>The Value is: {{ counter.count }}</h1>
        <h4>Last changed: {{ counter.lastChanged }}</h4>
    </div>
</template>

<style scoped>

</style>