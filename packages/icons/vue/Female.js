import { defineComponent, h } from 'vue';

export const Female = defineComponent({
  name: 'Female',
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
        h('path', {"d": "M12 2.25a6.75 6.75 0 0 0-.75 13.459v2.541H10a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25v-2.541A6.751 6.751 0 0 0 12 2.25", "fillRule": "evenodd"})
      ]
    );
  }
});
