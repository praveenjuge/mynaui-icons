import { defineComponent, h } from 'vue';

export const TextAlignCenter = defineComponent({
  name: 'TextAlignCenter',
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
        h('path', {"d": "M3.75 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 6m2.5 4A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m-2.5 4a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m2.5 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
