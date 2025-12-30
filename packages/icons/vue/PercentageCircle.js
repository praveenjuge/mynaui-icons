import { defineComponent, h } from 'vue';

export const PercentageCircle = defineComponent({
  name: 'PercentageCircle',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.78-3.03a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z", "fillRule": "evenodd"})
      ]
    );
  }
});
