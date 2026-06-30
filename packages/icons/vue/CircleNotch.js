import { defineComponent, h } from 'vue';

export const CircleNotch = defineComponent({
  name: 'CircleNotch',
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
        h('path', {"d": "M15.625 3.641a.75.75 0 0 1 1.017-.3 9.8 9.8 0 0 1 5.108 8.615c0 5.406-4.362 9.794-9.75 9.794s-9.75-4.388-9.75-9.794a9.8 9.8 0 0 1 5.108-8.615.75.75 0 1 1 .717 1.318 8.3 8.3 0 0 0-4.325 7.297c0 4.584 3.697 8.294 8.25 8.294s8.25-3.71 8.25-8.294a8.3 8.3 0 0 0-4.325-7.297.75.75 0 0 1-.3-1.018", "fillRule": "evenodd"})
      ]
    );
  }
});
