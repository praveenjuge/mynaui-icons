import { defineComponent, h } from 'vue';

export const Tablet = defineComponent({
  name: 'Tablet',
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
        h('path', {"d": "M3.25 4.8c0-1.565 1.536-2.55 3.036-2.55h11.428c1.5 0 3.036.985 3.036 2.55v14.4c0 1.565-1.536 2.55-3.036 2.55H6.286c-1.5 0-3.036-.985-3.036-2.55zm7.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
