import { defineComponent, h } from 'vue';

export const DotsVerticalDiamond = defineComponent({
  name: 'DotsVerticalDiamond',
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
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m.96 9.76a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
