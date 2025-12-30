import { defineComponent, h } from 'vue';

export const KeyboardBrightnessHigh = defineComponent({
  name: 'KeyboardBrightnessHigh',
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
        h('path', {"d": "M12 7.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m7.193 3.32a.75.75 0 0 1-.184 1.044l-2.457 1.721a.75.75 0 0 1-.86-1.229l2.457-1.72a.75.75 0 0 1 1.044.184m-14.807 0a.75.75 0 0 1 1.044-.184l2.458 1.72a.75.75 0 1 1-.86 1.23L4.57 11.613a.75.75 0 0 1-.184-1.044M2.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m7 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
