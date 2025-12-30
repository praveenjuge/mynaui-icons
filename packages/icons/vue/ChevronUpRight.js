import { defineComponent, h } from 'vue';

export const ChevronUpRight = defineComponent({
  name: 'ChevronUpRight',
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
        h('path', {"d": "M6.886 7.879a.75.75 0 0 1 .75-.75h8.485a.75.75 0 0 1 .75.75v8.485a.75.75 0 0 1-.75.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
