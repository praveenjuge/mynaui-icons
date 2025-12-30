import { defineComponent, h } from 'vue';

export const FatCornerUpLeft = defineComponent({
  name: 'FatCornerUpLeft',
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
        h('path', {"d": "M11.003 4a.75.75 0 0 0-1.299-.511l-7.253 7.786a.75.75 0 0 0-.013 1.008l7.253 8.213A.75.75 0 0 0 11.003 20v-4.382c1.255-.138 2.576-.057 3.969.252 1.434.319 3.25 1.722 5.438 4.515a.75.75 0 0 0 1.337-.535c-.322-3.311-1.537-6.113-3.662-8.365-1.963-2.08-4.334-3.228-7.082-3.421z", "fillRule": "evenodd"})
      ]
    );
  }
});
