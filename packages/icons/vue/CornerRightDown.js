import { defineComponent, h } from 'vue';

export const CornerRightDown = defineComponent({
  name: 'CornerRightDown',
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
        h('path', {"d": "M19.517 14.763a.75.75 0 0 0 .027-1.06h-4.821V9a4.75 4.75 0 0 0-4.75-4.75H5a.75.75 0 0 0 0 1.5h4.973A3.25 3.25 0 0 1 13.223 9v4.703H8.402a.75.75 0 0 0 .027 1.06l5.027 4.78a.75.75 0 0 0 1.034 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
