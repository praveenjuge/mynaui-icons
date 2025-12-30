import { defineComponent, h } from 'vue';

export const Accessibility = defineComponent({
  name: 'Accessibility',
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
        h('path', {"d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-4.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM8.143 8.764a.75.75 0 0 0-.286 1.472l3.393.66v1.567l-1.544 3.752a.75.75 0 0 0 1.388.57L12 14.582l.906 2.203a.75.75 0 0 0 1.387-.57l-1.543-3.752v-1.567l3.393-.66a.75.75 0 1 0-.286-1.472L12 9.514z", "fillRule": "evenodd"})
      ]
    );
  }
});
