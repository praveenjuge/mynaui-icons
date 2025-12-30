import { defineComponent, h } from 'vue';

export const YenDiamond = defineComponent({
  name: 'YenDiamond',
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
        h('path', {"d": "M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M8.07 6.887a.75.75 0 0 1 1.044.184L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044", "fillRule": "evenodd"})
      ]
    );
  }
});
