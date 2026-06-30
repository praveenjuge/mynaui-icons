import { defineComponent, h } from 'vue';

export const ChevronDownLeft = defineComponent({
  name: 'ChevronDownLeft',
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
        h('path', {"d": "M16.364 16.871a.75.75 0 0 0 .75-.75L7.879 6.886a.75.75 0 0 0-.75.75v8.485c0 .415.335.75.75.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
