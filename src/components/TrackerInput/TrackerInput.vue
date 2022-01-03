<template>
    <div class="tracker-input">
        <div class="tracker-input__input">
            <input v-model="taskName" placeholder="Чем займемся?" class="t-input"/>
        </div>
        <timer @onStop="saveTask"/>
        <!-- <div>TIMER</div>
        <div>BUTTON PLAY</div> -->
        <!-- TRACKER-INPUT -->
    </div>
</template>

<script src="./TrackerInput.js"></script>
