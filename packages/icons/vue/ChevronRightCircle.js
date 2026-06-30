import { defineComponent, h } from 'vue';

export const ChevronRightCircle = defineComponent({
  name: 'ChevronRightCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9.03-4.03a.75.75 0 1 0-1.06 1.06L13.19 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
