import { defineComponent, h } from 'vue';

export const Hospital = defineComponent({
  name: 'Hospital',
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
        h('path', {"d": "M19.5 21.25c1.285 0 2.25-1.093 2.25-2.344V5.094c0-1.251-.965-2.344-2.25-2.344h-8c-1.285 0-2.25 1.093-2.25 2.344v6.29a2.2 2.2 0 0 0-.75-.134h-4c-1.285 0-2.25 1.093-2.25 2.344v5.312c0 1.251.965 2.344 2.25 2.344zM16 14.875c.372 0 .75.334.75.844v4.031h-2.5v-4.031c0-.51.378-.844.75-.844zm-1.15-3.82V9.918H13.8a.75.75 0 0 1 0-1.5h1.05v-1.14a.75.75 0 0 1 1.5 0v1.14h1.05l.077.004a.75.75 0 0 1 0 1.492l-.077.004h-1.05v1.139a.75.75 0 0 1-1.5 0M7.5 16.918l.077.004a.75.75 0 0 1 0 1.492l-.077.004H5.7a.75.75 0 0 1 0-1.5zm0-2.834a.75.75 0 0 1 0 1.5H5.7a.75.75 0 0 1 0-1.5z", "fillRule": "evenodd"})
      ]
    );
  }
});
