import { defineComponent, h } from 'vue';

export const CornerUpRight = defineComponent({
  name: 'CornerUpRight',
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
        h('path', {"d": "M14.763 4.483a.75.75 0 0 0-1.06-.026v4.82H9a4.75 4.75 0 0 0-4.75 4.75V19a.75.75 0 0 0 1.5 0v-4.973A3.25 3.25 0 0 1 9 10.777h4.703v4.821a.75.75 0 0 0 1.06-.027l4.78-5.027a.75.75 0 0 0 0-1.034z", "fillRule": "evenodd"})
      ]
    );
  }
});
