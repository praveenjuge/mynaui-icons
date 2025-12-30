import { defineComponent, h } from 'vue';

export const ArrowLeftRight = defineComponent({
  name: 'ArrowLeftRight',
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
        h('path', {"d": "M5.75 7.5c0 .414.336.75.75.75h6.97v3.28a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0v3.28H6.5a.75.75 0 0 0-.75.75m12.5 9a.75.75 0 0 1-.75.75h-6.97v3.28a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0v3.28h6.97a.75.75 0 0 1 .75.75", "fillRule": "evenodd"})
      ]
    );
  }
});
