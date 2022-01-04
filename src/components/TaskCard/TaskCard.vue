<template>
    <div class="task-card --shadowed">
        <input class="t-input" :value="value.task_name" @change="handleNameChange" placeholder="без названия"/>
        <div class="task-card__date-time">
            <p class="task-card__time pointer" @click="copyToClipboard">{{ time }}</p>
            <time-picker :value="[value.start_date, value.end_date]" @change="handlePeriodChange">
                <p class="task-card__date pointer" v-if="timePeriod" slot="reference">{{ timePeriod }}</p>
            </time-picker>
        </div>
        <button class="text-button remove-button" @click="handleRemoveBtnClick"><icon value="delete" :size="18"/></button>
    </div>
</template>

<script src="./TaskCard.js"></script>
