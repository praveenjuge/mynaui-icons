import { defineComponent, h } from 'vue';

export const ChevronDownRight = defineComponent({
  name: 'ChevronDownRight',
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
        h('path', {"d": "M16.871 7.636a.75.75 0 0 0-.75-.75l-9.235 9.235c0 .415.336.75.75.75h8.485a.75.75 0 0 0 .75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
