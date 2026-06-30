import { defineComponent, h } from 'vue';

export const RoomService = defineComponent({
  name: 'RoomService',
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
        h('path', {"d": "M2.25 20a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m10.5-16a.75.75 0 0 0-1.5 0v1.448a8.75 8.75 0 0 0-8 8.719V17c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75v-2.833a8.75 8.75 0 0 0-8-8.719z", "fillRule": "evenodd"})
      ]
    );
  }
});
