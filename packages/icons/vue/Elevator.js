import { defineComponent, h } from 'vue';

export const Elevator = defineComponent({
  name: 'Elevator',
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
        h('path', {"d": "M14.15 2.464a.75.75 0 1 0-1.05 1.072l1.626 1.589a.75.75 0 0 0 1.048 0L17.4 3.536a.75.75 0 1 0-1.048-1.072L15.25 3.54zm-4.876 0a.75.75 0 0 0-1.048 0L6.6 4.052a.75.75 0 0 0 1.048 1.073L8.75 4.049l1.1 1.076a.75.75 0 0 0 1.05-1.073zM12.75 21.75h3.75A2.75 2.75 0 0 0 19.25 19v-8.706a2.75 2.75 0 0 0-2.75-2.75h-3.75zm-1.5-14.206H7.5a2.75 2.75 0 0 0-2.75 2.75V19a2.75 2.75 0 0 0 2.75 2.75h3.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
