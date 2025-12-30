import { defineComponent, h } from 'vue';

export const ChevronUpLeft = defineComponent({
  name: 'ChevronUpLeft',
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
        h('path', {"d": "M7.879 7.129a.75.75 0 0 0-.75.75v8.485c0 .414.335.75.75.75l9.235-9.235a.75.75 0 0 0-.75-.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
