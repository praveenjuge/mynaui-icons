import { defineComponent, h } from 'vue';

export const Trees = defineComponent({
  name: 'Trees',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        width: '12px', height: '12px',
        class: `mynaui-solid ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M14.25 19v-1.25h-3.5V21a.75.75 0 0 1-1.5 0v-3.25H3a.75.75 0 0 1-.616-1.177l3.685-5.323H4.5a.75.75 0 0 1-.604-1.193l5.5-7.5.056-.069a.75.75 0 0 1 1.153.069l2.444 3.333 1.42-1.42.061-.055a.75.75 0 0 1 1.075.142l5.5 7.5.056.088a.75.75 0 0 1-.66 1.105h-1.468l2.559 3.29A.75.75 0 0 1 21 17.75h-5.25V19a.75.75 0 0 1-1.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});
