import { defineComponent, h } from 'vue';

export const Drop = defineComponent({
  name: 'Drop',
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
        h('path', {"d": "M13.024 2.468a.75.75 0 0 0-1.058 0c-.508.506-1.04 1.002-1.594 1.52-.428.4-.87.813-1.327 1.254-1.015.98-2.032 2.036-2.863 3.18-1.677 2.306-2.642 5.043-1.301 8.264C6.15 19.734 9.208 21.75 12.5 21.75s6.35-2.016 7.62-5.064c1.341-3.223.374-5.96-1.305-8.267-.832-1.143-1.85-2.2-2.866-3.179-.457-.44-.901-.854-1.33-1.254a68 68 0 0 1-1.595-1.518", "fillRule": "evenodd"})
      ]
    );
  }
});
