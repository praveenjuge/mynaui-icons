import { defineComponent, h } from 'vue';

export const Pause = defineComponent({
  name: 'Pause',
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
        h('path', {"d": "M8 5.75A1.75 1.75 0 0 0 6.25 7.5v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10A1.75 1.75 0 0 0 9 5.75zm6.5 0a1.75 1.75 0 0 0-1.75 1.75v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10a1.75 1.75 0 0 0-1.75-1.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
