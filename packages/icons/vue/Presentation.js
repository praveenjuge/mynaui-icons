import { defineComponent, h } from 'vue';

export const Presentation = defineComponent({
  name: 'Presentation',
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
        h('path', {"d": "M2.25 4A.75.75 0 0 1 3 3.25h18a.75.75 0 0 1 0 1.5h-1.15v9.028c0 .673-.271 1.317-.75 1.79a2.56 2.56 0 0 1-1.8.738h-3.473l3.2 3.16a.75.75 0 1 1-1.054 1.068L12 16.61l-3.973 3.924a.75.75 0 1 1-1.054-1.068l3.2-3.16H6.7c-.673 0-1.32-.265-1.8-.738a2.52 2.52 0 0 1-.75-1.79V4.75H3A.75.75 0 0 1 2.25 4", "fillRule": "evenodd"})
      ]
    );
  }
});
