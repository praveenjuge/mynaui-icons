import { defineComponent, h } from 'vue';

export const ChevronsDownLeft = defineComponent({
  name: 'ChevronsDownLeft',
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
        h('path', {"d": "M14.745 18.5a.75.75 0 0 0 .75-.75l-3.253-3.254h6.507a.75.75 0 0 0 .751-.751L10.255 4.5a.75.75 0 0 0-.75.75v6.508L6.25 8.504a.75.75 0 0 0-.751.751v8.494a.75.75 0 0 0 .75.751z", "fillRule": "evenodd"})
      ]
    );
  }
});
