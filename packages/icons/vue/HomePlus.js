import { defineComponent, h } from 'vue';

export const HomePlus = defineComponent({
  name: 'HomePlus',
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
        h('path', {"d": "M10.191 2.9 4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94h11.734c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0M12 10.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V16a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V11a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
