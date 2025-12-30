import { defineComponent, h } from 'vue';

export const ChevronsDownRight = defineComponent({
  name: 'ChevronsDownRight',
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
        h('path', {"d": "M9.255 18.5a.75.75 0 0 1-.75-.75l3.253-3.254H5.25a.75.75 0 0 1-.751-.751L13.745 4.5a.75.75 0 0 1 .75.75v6.508l3.254-3.254a.75.75 0 0 1 .751.751v8.494a.75.75 0 0 1-.75.751z", "fillRule": "evenodd"})
      ]
    );
  }
});
