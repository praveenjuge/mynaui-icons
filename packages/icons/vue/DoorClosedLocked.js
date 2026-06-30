import { defineComponent, h } from 'vue';

export const DoorClosedLocked = defineComponent({
  name: 'DoorClosedLocked',
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
        h('path', {"d": "M18.583 19.75H20.5a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1 0-1.5h1.917V5.5a2.75 2.75 0 0 1 2.75-2.75h7.666a2.747 2.747 0 0 1 2.75 2.747zm-2.833-7.395c0-.814-.639-1.533-1.497-1.536v-.822c0-.711-.268-1.3-.725-1.702a2.27 2.27 0 0 0-1.543-.545c-1.063.02-2.238.78-2.238 2.247v.822c-.858.003-1.497.722-1.497 1.536v2.359c0 .816.641 1.536 1.502 1.536h4.496c.86 0 1.502-.72 1.502-1.536z", "fillRule": "evenodd"}),
        h('path', {"d": "M9.763 12.32h4.474a.05.05 0 0 1 .013.035v2.359a.05.05 0 0 1-.013.036H9.763a.05.05 0 0 1-.013-.036v-2.359c0-.02.008-.03.013-.036m2.775-2.897c.107.094.215.26.215.575v.822h-1.506v-.822c0-.47.328-.738.768-.747a.77.77 0 0 1 .523.172", "fillRule": "evenodd"})
      ]
    );
  }
});
