<template>
    <div class="task-card --shadowed">
        <input class="t-input" :value="value.task_name" @change="handleNameChange" placeholder="без названия"/>
        <span class="pointer" @click="copyToClipboard">{{ time }}</span>
        <button class="text-button remove-button" @click="handleRemoveBtnClick"><icon value="delete" :size="18"/></button>
    </div>
</template>

<script src="./TaskCard.js"></script>
