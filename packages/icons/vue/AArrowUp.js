import { defineComponent, h } from 'vue';

export const AArrowUp = defineComponent({
  name: 'AArrowUp',
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
        h('path', {"d": "M7 6.25a.75.75 0 0 1 .702.487l3.75 10a.75.75 0 0 1-1.404.526L8.98 14.417H5.02l-1.068 2.846a.75.75 0 1 1-1.404-.526l3.75-10A.75.75 0 0 1 7 6.25m1.418 6.667L7 9.136l-1.418 3.78zM16.72 6.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06H18v5.47a.75.75 0 0 1-1.5 0v-5.47h-3.28a.75.75 0 0 1 0-1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
