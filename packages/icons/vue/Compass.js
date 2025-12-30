import { defineComponent, h } from 'vue';

export const Compass = defineComponent({
  name: 'Compass',
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
        h('path', {"d": "m10.186 13.814.907-2.721 2.721-.907-.907 2.721z", "fillRule": "evenodd"}),
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.462-2.763a.75.75 0 0 0-.95-.949l-4.5 1.5a.75.75 0 0 0-.473.475l-1.5 4.5a.75.75 0 0 0 .948.948l4.5-1.5a.75.75 0 0 0 .474-.474z", "fillRule": "evenodd"})
      ]
    );
  }
});
