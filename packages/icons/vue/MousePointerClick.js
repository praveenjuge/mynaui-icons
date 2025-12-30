import { defineComponent, h } from 'vue';

export const MousePointerClick = defineComponent({
  name: 'MousePointerClick',
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
        h('path', {"d": "M11.589 3a.75.75 0 0 0-1.5 0v1.978a.75.75 0 0 0 1.5 0zM5.983 4.945A.75.75 0 0 0 4.917 6l1.47 1.483A.75.75 0 1 0 7.452 6.43zM16.761 6a.75.75 0 0 0-1.065-1.055l-1.47 1.484a.75.75 0 1 0 1.065 1.055zM11.8 10.096c-1.025-.404-1.994.617-1.61 1.61l3.581 9.25c.41 1.058 1.901 1.059 2.311 0l1.374-3.543 3.508-1.385c1.048-.414 1.048-1.903 0-2.317zm-6.84.067H3a.75.75 0 0 0 0 1.5h1.96a.75.75 0 0 0 0-1.5m2.492 5.234a.75.75 0 0 0-1.065-1.056l-1.47 1.484a.75.75 0 1 0 1.066 1.056z", "fillRule": "evenodd"})
      ]
    );
  }
});
