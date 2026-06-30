import { defineComponent, h } from 'vue';

export const Sort = defineComponent({
  name: 'Sort',
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
        h('path', {"d": "M3.75 7a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 7m0 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75m0 5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0-.75.75", "fillRule": "evenodd"})
      ]
    );
  }
});
