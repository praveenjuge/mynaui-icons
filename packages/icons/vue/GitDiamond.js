import { defineComponent, h } from 'vue';

export const GitDiamond = defineComponent({
  name: 'GitDiamond',
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
        h('path', {"d": "M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5", "fillRule": "evenodd"}),
        h('path', {"d": "M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m-1.436 9.76a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
