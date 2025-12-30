import { defineComponent, h } from 'vue';

export const Mask = defineComponent({
  name: 'Mask',
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
        h('path', {"d": "M4.35 6.75a.6.6 0 0 0-.6.6v2.188a1.25 1.25 0 0 0 1.2 1.25V7.35a.6.6 0 0 0-.6-.6m.624 5.538a2.75 2.75 0 0 1-2.724-2.75V7.35a2.1 2.1 0 1 1 4.2 0v.418l4.214-1.235a4.75 4.75 0 0 1 2.672 0l4.214 1.235V7.35a2.1 2.1 0 1 1 4.2 0v2.188a2.75 2.75 0 0 1-2.724 2.75 7.05 7.05 0 0 1-14.052 0m14.076-1.5a1.25 1.25 0 0 0 1.2-1.25V7.35a.6.6 0 1 0-1.2 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
