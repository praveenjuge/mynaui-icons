import { defineComponent, h } from 'vue';

export const FineTune = defineComponent({
  name: 'FineTune',
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
        h('path', {"d": "M9.25 8.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m-7 7a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M5 5.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m14 7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5", "fillRule": "evenodd"})
      ]
    );
  }
});
