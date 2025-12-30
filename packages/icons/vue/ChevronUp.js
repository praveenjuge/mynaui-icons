import { defineComponent, h } from 'vue';

export const ChevronUp = defineComponent({
  name: 'ChevronUp',
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
        h('path', {"d": "M12.53 8.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h13.06a.75.75 0 0 0 0-1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
