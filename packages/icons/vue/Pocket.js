import { defineComponent, h } from 'vue';

export const Pocket = defineComponent({
  name: 'Pocket',
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
        h('path', {"d": "M2.984 3.036A2.5 2.5 0 0 1 4.8 2.25h14.4c.688 0 1.34.287 1.816.786.474.497.734 1.164.734 1.853v6.667c0 2.692-1.019 5.28-2.843 7.195-1.826 1.916-4.31 2.999-6.907 2.999a9.4 9.4 0 0 1-3.743-.781 9.7 9.7 0 0 1-3.164-2.218C3.27 16.837 2.25 14.248 2.25 11.556V4.889c0-.689.26-1.356.734-1.853M9.53 9.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L12 12.19z", "fillRule": "evenodd"})
      ]
    );
  }
});
