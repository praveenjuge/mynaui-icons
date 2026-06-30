import { defineComponent, h } from 'vue';

export const SlashDiamond = defineComponent({
  name: 'SlashDiamond',
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
        h('path', {"d": "M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m4.74 8.04-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 1 1 1.06 1.06", "fillRule": "evenodd"})
      ]
    );
  }
});
