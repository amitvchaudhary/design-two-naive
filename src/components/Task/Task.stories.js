import Task from './Task.vue';

export default {
  component: Task,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Task',
  //👇 Our events will be mapped in Storybook UI
};

const Template = args => ({
  components: { Task },
  setup() {
    return { ...args };
  },
  template: '<Task :title="args" />',
});
export const Default = Template.bind({});
Default.args = {
  title: "Default one"
};
