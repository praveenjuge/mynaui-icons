import { defineComponent, h } from 'vue';

export const MousePointer = defineComponent({
  name: 'MousePointer',
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
        h('path', {"d": "M3.348 5.706c-.486-1.457.9-2.844 2.358-2.358L18.645 7.66c1.627.543 1.72 2.808.145 3.483l-4.61 1.976 6.35 6.35a.75.75 0 1 1-1.06 1.061l-6.35-6.35-1.977 4.61c-.675 1.576-2.94 1.481-3.482-.145z", "fillRule": "evenodd"})
      ]
    );
  }
});
