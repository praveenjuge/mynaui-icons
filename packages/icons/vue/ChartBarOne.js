import { defineComponent, h } from 'vue';

export const ChartBarOne = defineComponent({
  name: 'ChartBarOne',
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
        h('path', {"d": "M11 2.25A2.75 2.75 0 0 0 8.25 5v7.536H5a2.75 2.75 0 0 0-2.75 2.75V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-7.571A2.75 2.75 0 0 0 19 8.679h-3.25V5A2.75 2.75 0 0 0 13 2.25z", "fillRule": "evenodd"})
      ]
    );
  }
});
