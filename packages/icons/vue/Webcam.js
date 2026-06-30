import { defineComponent, h } from 'vue';

export const Webcam = defineComponent({
  name: 'Webcam',
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
        h('path', {"d": "M4.05 10.2a7.95 7.95 0 1 1 8.7 7.915v2.135h3.75a.75.75 0 1 1 0 1.5h-9a.75.75 0 0 1 0-1.5h3.75v-2.135a7.95 7.95 0 0 1-7.2-7.915m6 0a1.95 1.95 0 1 0 3.9 0 1.95 1.95 0 0 0-3.9 0", "fillRule": "evenodd"})
      ]
    );
  }
});
