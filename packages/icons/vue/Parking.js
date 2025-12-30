import { defineComponent, h } from 'vue';

export const Parking = defineComponent({
  name: 'Parking',
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
        h('path', {"d": "M12.776 11.85H11.25v-2.1h1.526c.36 0 .58.132.722.299.155.182.252.452.252.751s-.097.569-.252.751c-.142.167-.363.299-.722.299", "fillRule": "evenodd"}),
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.25-3.75a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-1.65h1.526c.79 0 1.431-.318 1.864-.826.42-.493.61-1.123.61-1.724s-.19-1.231-.61-1.724c-.433-.508-1.075-.826-1.864-.826z", "fillRule": "evenodd"})
      ]
    );
  }
});
