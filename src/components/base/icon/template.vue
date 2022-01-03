<template>
    <span
        class="icon"
        :class="[
            className,
            bg ? `icon_bg icon_bg_${bg}` : '',
            {
                'icon_pointer': _events.click,
                'icon_goback': type==='goBack',
                'icon_disabled': disabled
            }
        ]"
        :style="getStyle"
        @click="$emit('click')">
        <img
            v-if="type==='img'"
            class="icon__inner"
            :src="getImgUrl(value)"/>
        <svg
            v-else-if="type==='svg'"
            role="img"
            class="icon__inner"
            :class="`icon__inner_${value}`">
            <use :xlink:href="`#${value}`"></use>
        </svg>
        <i
            v-else-if="type==='icon'"
            class="icon__inner"
            :class="value"></i>
        <!-- Custom -->
        <i
            v-else-if="type==='goBack'"
            class="icon__inner el-icon-arrow-left"
            :class="value"></i>
        <svg
            v-else-if="type==='direction'"
            role="img"
            transform="rotate(135) scale(1.2)"
            class="icon__inner">
            <use :xlink:href="`#direction`"></use>
        </svg>
        <!-- /Custom -->

        <div v-if="hasSlotData" class="icon__slot">
            <slot></slot>
        </div>
    </span>
</template>

<script src="./index.js"></script>
