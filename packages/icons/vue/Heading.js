import { defineComponent, h } from 'vue';

export const Heading = defineComponent({
  name: 'Heading',
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
        h('path', {"d": "M7.25 3.75A.75.75 0 0 1 8 4.5v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75H8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
