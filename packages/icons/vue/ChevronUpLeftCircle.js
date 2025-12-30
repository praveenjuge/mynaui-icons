import { defineComponent, h } from 'vue';

export const ChevronUpLeftCircle = defineComponent({
  name: 'ChevronUpLeftCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M10 9.25a.75.75 0 0 0-.75.75v4.95a.75.75 0 1 0 1.5 0v-4.2h4.2a.75.75 0 1 0 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
