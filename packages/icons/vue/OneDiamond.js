import { defineComponent, h } from 'vue';

export const OneDiamond = defineComponent({
  name: 'OneDiamond',
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
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
