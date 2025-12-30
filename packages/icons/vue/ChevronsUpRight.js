import { defineComponent, h } from 'vue';

export const ChevronsUpRight = defineComponent({
  name: 'ChevronsUpRight',
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
        h('path', {"d": "M9.257 5.507a.75.75 0 0 0-.75.75l3.25 3.25h-6.5a.75.75 0 0 0-.75.75l9.236 9.236a.75.75 0 0 0 .75-.75v-6.5l3.25 3.25a.75.75 0 0 0 .75-.75V6.257a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
