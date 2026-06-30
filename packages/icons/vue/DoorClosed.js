import { defineComponent, h } from 'vue';

export const DoorClosed = defineComponent({
  name: 'DoorClosed',
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
        h('path', {"d": "M20.5 19.75h-1.917V5.497a2.747 2.747 0 0 0-2.75-2.747H8.167a2.75 2.75 0 0 0-2.75 2.75v14.25H3.5a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5M14.25 11a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
