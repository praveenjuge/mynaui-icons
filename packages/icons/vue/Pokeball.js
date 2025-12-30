import { defineComponent, h } from 'vue';

export const Pokeball = defineComponent({
  name: 'Pokeball',
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
        h('path', {"d": "M10.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0", "fillRule": "evenodd"}),
        h('path', {"d": "M9.353 11.25a2.751 2.751 0 0 1 5.293 0h7.075c-.383-5.034-4.589-9-9.721-9-5.133 0-9.339 3.966-9.722 9zm5.293 1.5a2.751 2.751 0 0 1-5.293 0H2.278c.383 5.034 4.59 9 9.722 9s9.339-3.966 9.721-9z", "fillRule": "evenodd"})
      ]
    );
  }
});
