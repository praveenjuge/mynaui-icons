import { defineComponent, h } from 'vue';

export const MapPinPlusInside = defineComponent({
  name: 'MapPinPlusInside',
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
        h('path', {"d": "M18.286 3.843A8.77 8.77 0 0 0 12 1.167a8.77 8.77 0 0 0-6.286 2.676c-3.06 3.147-3.04 6.919-1.63 10.288 1.393 3.33 4.163 6.363 6.822 8.339a1.83 1.83 0 0 0 2.188 0c2.66-1.976 5.43-5.01 6.822-8.34 1.41-3.368 1.43-7.14-1.63-10.287m-7.119 6.99H9.5a.833.833 0 1 1 0-1.666h1.667V7.5a.833.833 0 1 1 1.666 0v1.667H14.5l.085.004a.833.833 0 0 1-.085 1.662h-1.667V12.5a.833.833 0 1 1-1.666 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
