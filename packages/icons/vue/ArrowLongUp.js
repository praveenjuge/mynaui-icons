import { defineComponent, h } from 'vue';

export const ArrowLongUp = defineComponent({
  name: 'ArrowLongUp',
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
        h('path', {"d": "M16.53 6.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h3.78V22a.75.75 0 0 0 1.5 0V6.53z", "fillRule": "evenodd"})
      ]
    );
  }
});
