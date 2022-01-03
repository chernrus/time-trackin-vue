<template>
    <div class="timer">
        <div class="timer__time">
            {{ timeString }}
        </div>
        <div class="timer__button">
            <button v-if="processing" @click="stop" class="icon-button rounded"><Icon value="stop" :size="24"/></button>
            <button v-else @click="start"  class="icon-button rounded"><Icon value="play" :size="24"/></button>
        </div>
    </div>
</template>

<script src="./Timer.js"></script>
