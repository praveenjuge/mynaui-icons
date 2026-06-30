import { defineComponent, h } from 'vue';

export const HomeMinus = defineComponent({
  name: 'HomeMinus',
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
        h('path', {"d": "M10.191 2.9a2.84 2.84 0 0 1 3.618 0l5.866 4.818a2.96 2.96 0 0 1 1.075 2.29v8.802c0 1.605-1.273 2.94-2.883 2.94H6.133c-1.61 0-2.883-1.335-2.883-2.94v-8.802c0-.886.392-1.73 1.075-2.29zM9.5 12.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
