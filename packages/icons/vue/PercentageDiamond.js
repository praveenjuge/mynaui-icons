import { defineComponent, h } from 'vue';

export const PercentageDiamond = defineComponent({
  name: 'PercentageDiamond',
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
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.76 7.48a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
