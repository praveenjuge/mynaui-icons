import { defineComponent, h } from 'vue';

export const ZapOff = defineComponent({
  name: 'ZapOff',
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
        h('path', {"d": "M13.493 3.659a1.25 1.25 0 0 0-.711-1.296 1.195 1.195 0 0 0-1.46.36L3.518 12.736a1.28 1.28 0 0 0-.16 1.302c.172.393.57.741 1.116.741H8.16l-5.69 5.69a.75.75 0 1 0 1.06 1.061l6.752-6.751h.875l-.65 5.562a1.25 1.25 0 0 0 .711 1.296 1.195 1.195 0 0 0 1.46-.36l7.803-10.013a1.28 1.28 0 0 0 .16-1.302 1.22 1.22 0 0 0-1.116-.741H15.84l5.69-5.69a.75.75 0 0 0-1.06-1.061l-6.752 6.75h-.875z", "fillRule": "evenodd"})
      ]
    );
  }
});
