import { defineComponent, h } from 'vue';

export const Printer = defineComponent({
  name: 'Printer',
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
        h('path', {"d": "M4.25 5v4.25H4A1.75 1.75 0 0 0 2.25 11v8c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 19v-8A1.75 1.75 0 0 0 20 9.25h-.25V5A1.75 1.75 0 0 0 18 3.25H6A1.75 1.75 0 0 0 4.25 5m14 4.25H5.75V5A.25.25 0 0 1 6 4.75h12a.25.25 0 0 1 .25.25zm-1.5 10h-6V17a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25zM5.25 13a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
