import { defineComponent, h } from 'vue';

export const WifiMedium = defineComponent({
  name: 'WifiMedium',
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
        h('path', {"d": "M4.47 12.37c4.159-4.16 10.901-4.16 15.06 0a.75.75 0 1 1-1.06 1.06 9.15 9.15 0 0 0-12.94 0 .75.75 0 0 1-1.06-1.06m3 3.257a6.407 6.407 0 0 1 9.06 0 .75.75 0 0 1-1.06 1.06 4.907 4.907 0 0 0-6.94 0 .75.75 0 1 1-1.06-1.06M12 18a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 18", "fillRule": "evenodd"})
      ]
    );
  }
});
