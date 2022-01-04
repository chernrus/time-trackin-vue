<template>
    <div class="time-picker">
        <div @click.stop="show">
            <slot name="reference"/>
        </div>
        <div class="time-picker__popdown" v-if="visible" v-click-outside="hide">
            <div class="period">
                <div class="period__input">
                    <label>С</label>
                    <input v-model="start" class="t-input" @keyup.enter="onEnter"/>
                </div>
                <div class="period__input">
                    <label>По</label>
                    <input v-model="end" class="t-input" @keyup.enter="onEnter"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TimePicker"></script>

<style lang="scss">
    .time-picker {
        position: relative;
        text-align: left;
        &__popdown {
            position: absolute;
            right: 0;
            top: 100%;

            background-color: #343B42;
            padding: 16px;
            border-radius: 12px;

            .period {
                display: flex;
                &__input {
                    width: 100px;
                    border-bottom: 2px solid black;
                }
                label {
                    margin-bottom: 8px;
                    display: inline-block;
                }
            }
            .period__input + .period__input {
                margin-left: 16px;
            }
        }
    }
</style>
