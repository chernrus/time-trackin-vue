import { mapMutations } from 'vuex';
import Timer from '@/components/Timer/Timer.vue';

export default {
    name: 'tracker-input',
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    components: {
        Timer,
    },
    data() {
        return {
            taskName: '',
        };
    },
    watch: {
        value: {
            handler(value) {
                this.taskName = value;
            },
            immediate: true,
        },
    },
    methods: {
        ...mapMutations([
            'addTask',
        ]),
        saveTask(timerValue) {
            this.addTask({
                ...timerValue,
                task_name: this.taskName || '',
            });
        },
    },
};
