import { defineComponent, h } from 'vue';

export const FatCornerRightUp = defineComponent({
  name: 'FatCornerRightUp',
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
        h('path', {"d": "M12.725 2.451a.75.75 0 0 0-1.007-.013L3.504 9.69A.75.75 0 0 0 4 11.003h4.382c.138 1.255.057 2.576-.252 3.969-.318 1.434-1.722 3.25-4.515 5.438a.75.75 0 0 0 .535 1.337c3.311-.322 6.112-1.537 8.365-3.662 2.08-1.963 3.228-4.334 3.422-7.082H20a.75.75 0 0 0 .511-1.299z", "fillRule": "evenodd"})
      ]
    );
  }
});
