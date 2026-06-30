import { defineComponent, h } from 'vue';

export const MapPinMinus = defineComponent({
  name: 'MapPinMinus',
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
        h('path', {"d": "M12 1c2.408 0 4.712.984 6.406 2.727 2.511 2.582 2.998 5.61 2.31 8.504a1 1 0 0 1-1.947-.462c.553-2.322.173-4.62-1.797-6.648A6.93 6.93 0 0 0 12 3c-1.86 0-3.648.76-4.972 2.121-2.407 2.476-2.465 5.403-1.253 8.302 1.233 2.946 3.75 5.737 6.224 7.575.445-.33.896-.693 1.34-1.085a1 1 0 1 1 1.322 1.5q-.73.642-1.468 1.19a1.995 1.995 0 0 1-2.386 0C8.13 20.617 5.338 17.56 3.93 14.196c-1.428-3.412-1.456-7.26 1.663-10.468A8.94 8.94 0 0 1 12 1", "fillRule": "evenodd"}),
        h('path', {"d": "M20 15.5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0", "fillRule": "evenodd"})
      ]
    );
  }
});
