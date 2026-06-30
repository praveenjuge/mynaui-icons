import { defineComponent, h } from 'vue';

export const ArrowBigLeft = defineComponent({
  name: 'ArrowBigLeft',
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
        h('path', {"d": "M11.645 4.483c0-1.16-1.387-1.592-2.13-.884l-.036.037-6.87 7.502a1.216 1.216 0 0 0 0 1.724l6.87 7.502.035.037c.744.708 2.131.277 2.131-.884v-3.569h8.85c.659 0 1.255-.518 1.255-1.232V9.284c0-.714-.596-1.232-1.256-1.232h-8.849z", "fillRule": "evenodd"})
      ]
    );
  }
});
