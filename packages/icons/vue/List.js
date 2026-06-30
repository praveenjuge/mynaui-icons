import { defineComponent, h } from 'vue';

export const List = defineComponent({
  name: 'List',
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
        h('path', {"d": "M3.25 6.5A.75.75 0 0 1 4 5.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0A.75.75 0 0 1 8 5.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
