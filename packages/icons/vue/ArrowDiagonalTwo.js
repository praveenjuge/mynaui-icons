import { defineComponent, h } from 'vue';

export const ArrowDiagonalTwo = defineComponent({
  name: 'ArrowDiagonalTwo',
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
        h('path', {"d": "M13.238 19.601a.75.75 0 0 0 0-1.06l-4.929-4.929 2.32-2.32a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75v4.95c0 .415.336.75.75.75l2.32-2.319 4.928 4.928a.75.75 0 0 0 1.06 0M10.763 4.399a.75.75 0 0 1 1.06 0l4.929 4.928 2.32-2.32a.75.75 0 0 1 .75.75v4.95a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1-.75-.75l2.32-2.32-4.93-4.928a.75.75 0 0 1 0-1.06", "fillRule": "evenodd"})
      ]
    );
  }
});
