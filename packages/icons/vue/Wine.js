import { defineComponent, h } from 'vue';

export const Wine = defineComponent({
  name: 'Wine',
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
        h('path', {"d": "M6.75 2.25c-.69 0-1.25.56-1.25 1.25v5.75A5.75 5.75 0 0 0 11.25 15v5.25H8.4a.75.75 0 0 0 0 1.5h7.2a.75.75 0 0 0 0-1.5h-2.85V15a5.75 5.75 0 0 0 5.75-5.75V3.5c0-.69-.56-1.25-1.25-1.25z", "fillRule": "evenodd"})
      ]
    );
  }
});
