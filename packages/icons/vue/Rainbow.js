import { defineComponent, h } from 'vue';

export const Rainbow = defineComponent({
  name: 'Rainbow',
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
        h('path', {"d": "M14 17.5v-2a2 2 0 1 0-4 0v2a1 1 0 1 1-2 0v-2a4 4 0 0 1 8 0v2a1 1 0 1 1-2 0m3 0v-2a5 5 0 0 0-10 0v2a1 1 0 1 1-2 0v-2a7 7 0 1 1 14 0v2a1 1 0 1 1-2 0m3 0v-2a8 8 0 1 0-16 0v2a1 1 0 1 1-2 0v-2c0-5.523 4.477-10 10-10s10 4.477 10 10v2a1 1 0 1 1-2 0", "fillRule": "evenodd"})
      ]
    );
  }
});
