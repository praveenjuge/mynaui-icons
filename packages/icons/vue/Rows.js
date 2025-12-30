import { defineComponent, h } from 'vue';

export const Rows = defineComponent({
  name: 'Rows',
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
        h('path', {"d": "M4 4.75A1.75 1.75 0 0 0 2.25 6.5v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 4.75zm0 8a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 12.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
