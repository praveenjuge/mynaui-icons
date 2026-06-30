import { defineComponent, h } from 'vue';

export const ArrowsUpFromLine = defineComponent({
  name: 'ArrowsUpFromLine',
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
        h('path', {"d": "M20 19.75a1.25 1.25 0 0 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM5.75 17V6.75l-.75 1a1.25 1.25 0 0 1-2-1.5l3-4a1.25 1.25 0 0 1 2 0l3 4a1.25 1.25 0 1 1-2 1.5l-.75-1V17a1.25 1.25 0 1 1-2.5 0m10 0V6.75l-.75 1a1.25 1.25 0 0 1-2-1.5l3-4a1.25 1.25 0 0 1 2 0l3 4a1.25 1.25 0 1 1-2 1.5l-.75-1V17a1.25 1.25 0 0 1-2.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});
