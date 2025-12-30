import { defineComponent, h } from 'vue';

export const AArrowDown = defineComponent({
  name: 'AArrowDown',
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
        h('path', {"d": "M7 6.25a.75.75 0 0 1 .702.487l3.75 10a.75.75 0 0 1-1.404.526L8.98 14.417H5.02l-1.068 2.846a.75.75 0 1 1-1.404-.526l3.75-10A.75.75 0 0 1 7 6.25m1.418 6.667L7 9.136l-1.418 3.78zM17.25 6.75a.75.75 0 0 1 .75.75v4.97h3.28a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06h3.28V7.5a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
