export default {
    name: 'Icon',
    props: {
        value: {
            type: [String, Boolean],
            default: '',
        },
        className: {
            type: [String, Array],
            default: '',
        },
        type: {
            type: String,
            validator: (value) => ['svg', 'img', 'icon', 'empty', 'goBack', 'direction'].includes(value),
            default: 'svg',
        },
        bg: {
            type: String,
            validator: (value) => ['', 'circle', 'radius'].includes(value),
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        bgColor: {
            type: String,
            default: '',
        },
        rotate: {
            type: [Number, String],
            default: null,
        },
        size: {
            type: [Number, String],
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        getStyle() {
            let style = '';
            if (this.color) style += `color:${this.getColor(this.color)};`;
            if (this.bgColor) style += `background:${this.getColor(this.bgColor)};`;
            if (this.size) style += `font-size:${+this.size / 10}rem;`;

            let transform = '';
            if (this.type === 'direction') transform += 'scale(1.187) ';
            if (this.rotate || this.rotate === 0) transform += `rotate(${this.rotate}deg) `;
            if (transform) style += `transform:${transform};`;

            return style;
        },
        hasSlotData() {
            return !!this.$slots.default || !!this.$scopedSlots.default;
        },
    },
    methods: {
        getImgUrl(fileName) {
            const images = require.context('@/assets/img/', true, /\.(png|jpe?g|svg)$/);
            return images(fileName);
        },
        getColor(color) {
            switch (color) {
            case 'black': return '#1B2028';
            case 'black-hover': return '#16191f';
            case 'grey': return '#767D88';
            case 'grey-hover': return '#313640';
            case 'dark': return '#363C46';
            case 'dark-hover': return '#414954';
            case 'back': return '#292f38';
            case 'back-hover': return '#2B3038';
            case 'light': return '#a5acb7';
            case 'light-hover': return '#6f747e';
            case 'primary': return '#F15B22';
            case 'primary-hover': return '#c64f23';
            case 'success': return '#4CD058';
            case 'danger': return '#EA4C4C';
            case 'danger-hover': return '#c14345';
            default: return color;
            }
        },
    },
};
