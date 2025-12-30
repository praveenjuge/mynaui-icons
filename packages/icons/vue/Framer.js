import { defineComponent, h } from 'vue';

export const Framer = defineComponent({
  name: 'Framer',
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
        h('path', {"d": "M5.5 2.25a.75.75 0 0 0-.522 1.289l5.17 5.011H5.5a.75.75 0 0 0-.75.75v6.3c0 .235.108.445.278.583l6.493 5.394A.75.75 0 0 0 12.75 21v-4.65h5.75a.75.75 0 0 0 .522-1.289l-5.17-5.011H18.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
