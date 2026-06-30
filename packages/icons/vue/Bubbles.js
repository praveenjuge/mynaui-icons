import { defineComponent, h } from 'vue';

export const Bubbles = defineComponent({
  name: 'Bubbles',
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
        h('path', {"d": "M13.75 8a5.75 5.75 0 1 1-11.5 0 5.75 5.75 0 0 1 11.5 0m4.75 4.113a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5m1.219 5.387a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});
