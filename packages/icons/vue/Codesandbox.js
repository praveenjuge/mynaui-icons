import { defineComponent, h } from 'vue';

export const Codesandbox = defineComponent({
  name: 'Codesandbox',
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
        h('path', {"d": "M5.25 5.25h13.5v13.5H5.25zm1.5 1.5v10.5h10.5V6.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
