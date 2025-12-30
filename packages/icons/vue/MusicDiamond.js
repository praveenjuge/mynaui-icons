import { defineComponent, h } from 'vue';

export const MusicDiamond = defineComponent({
  name: 'MusicDiamond',
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
        h('path', {"d": "M11 13.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5", "fillRule": "evenodd"}),
        h('path', {"d": "M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m3.71 7.26h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5", "fillRule": "evenodd"})
      ]
    );
  }
});
