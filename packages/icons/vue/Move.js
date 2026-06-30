import { defineComponent, h } from 'vue';

export const Move = defineComponent({
  name: 'Move',
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
        h('path', {"d": "M11.47 2.47a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1 0 1.06h-2.48v5.02h5.02V8.77a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 0 1-1.06 0v-2.48h-5.02v5.02h2.48a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06h2.48v-5.02H6.23v2.48a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06l2.7-2.7a.75.75 0 0 1 1.06 0v2.48h5.02V6.23H8.77a.75.75 0 0 1 0-1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
