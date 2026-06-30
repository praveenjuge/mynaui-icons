import { defineComponent, h } from 'vue';

export const SquareDashedKanban = defineComponent({
  name: 'SquareDashedKanban',
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
        h('path', {"d": "M14.6 20a1 1 0 1 1 0 2H9.4a1 1 0 1 1 0-2zM2.982 17.925a1 1 0 0 1 1.345.437 3 3 0 0 0 1.31 1.31 1 1 0 0 1-.907 1.783 5 5 0 0 1-2.185-2.185 1 1 0 0 1 .437-1.345m16.69.437a1 1 0 0 1 1.783.908 5 5 0 0 1-2.185 2.185 1 1 0 0 1-.908-1.782 3 3 0 0 0 1.31-1.31M14 15a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm-12-.4V9.4a1 1 0 0 1 2 0v5.2a1 1 0 1 1-2 0m18 0V9.4a1 1 0 1 1 2 0v5.2a1 1 0 1 1-2 0M18 11a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm-3-4a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2zM4.73 2.545a1 1 0 0 1 .908 1.782 3 3 0 0 0-1.31 1.31 1 1 0 0 1-1.783-.907A5 5 0 0 1 4.73 2.545m13.195.437a1 1 0 0 1 1.345-.437 5 5 0 0 1 2.185 2.185 1 1 0 0 1-1.782.908 3 3 0 0 0-1.31-1.31 1 1 0 0 1-.438-1.346M14.6 2l.102.005a1 1 0 0 1 0 1.99L14.6 4H9.4a1 1 0 0 1 0-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
