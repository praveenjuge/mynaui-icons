import { defineComponent, h } from 'vue';

export const BatteryCharging = defineComponent({
  name: 'BatteryCharging',
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
        h('path', {"d": "M10.989 6.25H4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h5.293a1 1 0 0 1 .036-.086l2.959-4.913H8.5a.75.75 0 0 1-.67-1.086z", "fillRule": "evenodd"}),
        h('path', {"d": "M11.013 17.75H18A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25h-5.292a1 1 0 0 1-.036.085l-2.958 4.916h3.788a.75.75 0 0 1 .67 1.085zM21.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
