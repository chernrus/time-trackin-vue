<template>
    <div class="task-list">
        <task-card v-for="task in taskList" :key="task.date" :value="task">{{ task }}</task-card>
    </div>
</template>

<script src="./TaskList.js"></script>
