import { defineComponent, h } from 'vue';

export const ArrowLongUpRight = defineComponent({
  name: 'ArrowLongUpRight',
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
        h('path', {"d": "M4.47 19.53a.75.75 0 0 1 0-1.06L15.095 7.845 12.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75l-2.845-2.845L5.53 19.53a.75.75 0 0 1-1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});
