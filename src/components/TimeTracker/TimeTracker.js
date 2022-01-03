import { mapGetters } from 'vuex';
import TrackerInput from '@/components/TrackerInput/TrackerInput.vue';
import TaskList from '@/components/TaskList/TaskList.vue';

export default {
    name: 'time-tracker',
    components: {
        TrackerInput,
        TaskList,
    },
    computed: {
        ...mapGetters(['taskList']),
    },
};
