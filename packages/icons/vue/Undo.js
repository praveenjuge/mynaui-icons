import { defineComponent, h } from 'vue';

export const Undo = defineComponent({
  name: 'Undo',
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
        h('path', {"d": "M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75a9.72 9.72 0 0 1-6.894-2.856.75.75 0 0 1 1.06-1.06A8.25 8.25 0 1 0 12 3.75c-2.556 0-4.422 1.168-6.167 2.833L7.75 8.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 3 3.75l1.77 1.77C6.67 3.705 8.905 2.25 12 2.25", "fillRule": "evenodd"})
      ]
    );
  }
});
