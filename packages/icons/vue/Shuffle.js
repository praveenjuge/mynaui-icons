import { defineComponent, h } from 'vue';

export const Shuffle = defineComponent({
  name: 'Shuffle',
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
        h('path', {"d": "M14.75 4a.75.75 0 0 1 .75-.75h4.412a.75.75 0 0 1 .75.75v4.444a.75.75 0 0 1-.75.75l-2.017-2.029L4.53 20.53a.75.75 0 0 1-1.06-1.06L16.839 6.1z", "fillRule": "evenodd"}),
        h('path', {"d": "M3.47 3.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 1 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0m10.002 9.998a.75.75 0 0 1 1.06.004l3.36 3.385L20 14.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75l2.082-2.082-3.364-3.39a.75.75 0 0 1 .004-1.06", "fillRule": "evenodd"})
      ]
    );
  }
});
