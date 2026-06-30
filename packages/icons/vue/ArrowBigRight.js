import { defineComponent, h } from 'vue';

export const ArrowBigRight = defineComponent({
  name: 'ArrowBigRight',
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
        h('path', {"d": "M14.486 3.6c-.744-.71-2.131-.278-2.131.883v3.569h-8.85c-.659 0-1.255.518-1.255 1.232v5.432c0 .714.596 1.232 1.256 1.232h8.849v3.569c0 1.16 1.387 1.592 2.13.884l.036-.037 6.87-7.502a1.216 1.216 0 0 0 0-1.724l-6.87-7.502z", "fillRule": "evenodd"})
      ]
    );
  }
});
