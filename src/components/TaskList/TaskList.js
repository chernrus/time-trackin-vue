import { mapGetters } from 'vuex';
import TaskCard from '@/components/TaskCard/TaskCard.vue';

export default {
    name: 'task-list',
    components: {
        TaskCard,
    },
    // props: {
    //     value: {
    //         type: Array,
    //         default: () => ([]),
    //     },
    // },
    data() {
        return {
            taskName: '',
        };
    },
    computed: {
        ...mapGetters([
            'taskList',
        ]),
    },
};
