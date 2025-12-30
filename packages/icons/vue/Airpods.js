import { defineComponent, h } from 'vue';

export const Airpods = defineComponent({
  name: 'Airpods',
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
        h('path', {"d": "M6.5 3.75a4.25 4.25 0 0 0-.25 8.493V18a2.25 2.25 0 0 0 4.5 0V8A4.25 4.25 0 0 0 6.5 3.75m11 0A4.25 4.25 0 0 0 13.25 8v10a2.25 2.25 0 0 0 4.5 0v-5.757a4.25 4.25 0 0 0-.25-8.493", "fillRule": "evenodd"})
      ]
    );
  }
});
