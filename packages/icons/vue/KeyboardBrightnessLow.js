import { defineComponent, h } from 'vue';

export const KeyboardBrightnessLow = defineComponent({
  name: 'KeyboardBrightnessLow',
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
        h('path', {"d": "M12 8.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m-7.53 2.72a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 1 1-1.06 1.06l-.707-.707a.75.75 0 0 1 0-1.06m14.767 0a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0M2.25 17a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m5 0a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m12 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
