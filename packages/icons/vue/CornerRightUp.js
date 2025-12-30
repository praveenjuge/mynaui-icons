import { defineComponent, h } from 'vue';

export const CornerRightUp = defineComponent({
  name: 'CornerRightUp',
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
        h('path', {"d": "M19.517 9.237c.3.285.312.76.027 1.06h-4.821V15a4.75 4.75 0 0 1-4.75 4.75H5a.75.75 0 0 1 0-1.5h4.973a3.25 3.25 0 0 0 3.25-3.25v-4.703H8.402a.75.75 0 0 1 .027-1.06l5.027-4.78a.75.75 0 0 1 1.034 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
