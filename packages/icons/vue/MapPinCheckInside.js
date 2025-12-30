import { defineComponent, h } from 'vue';

export const MapPinCheckInside = defineComponent({
  name: 'MapPinCheckInside',
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
        h('path', {"d": "M18.286 3.843A8.77 8.77 0 0 0 12 1.167a8.77 8.77 0 0 0-6.286 2.676c-3.06 3.147-3.04 6.919-1.63 10.288 1.393 3.33 4.163 6.363 6.822 8.339a1.83 1.83 0 0 0 2.188 0c2.66-1.976 5.43-5.01 6.822-8.34 1.41-3.368 1.43-7.14-1.63-10.287m-3.554 3.481c.374.27.458.791.189 1.164l-2.8 3.876c-.426.59-1.29.63-1.77.083l-1.378-1.576a.834.834 0 0 1 1.195-1.158l.06.06.935 1.07 2.406-3.331a.833.833 0 0 1 1.163-.188", "fillRule": "evenodd"})
      ]
    );
  }
});
