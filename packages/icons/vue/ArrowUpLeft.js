import { defineComponent, h } from 'vue';

export const ArrowUpLeft = defineComponent({
  name: 'ArrowUpLeft',
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
        h('path', {"d": "M15.5 5.75a.75.75 0 0 1 .75.75l-4.345 4.345 6.125 6.125a.75.75 0 1 1-1.06 1.06l-6.125-6.125L6.5 16.25a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
