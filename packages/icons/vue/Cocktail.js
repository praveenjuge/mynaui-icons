import { defineComponent, h } from 'vue';

export const Cocktail = defineComponent({
  name: 'Cocktail',
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
        h('path', {"d": "M5.012 2.25c-1.463 0-2.307 1.69-1.372 2.846l7.61 9.42v5.734H7.33a.75.75 0 0 0 0 1.5h9.341a.75.75 0 0 0 0-1.5h-3.92v-5.735l7.61-9.419c.934-1.157.09-2.846-1.373-2.846zm1.893 4.5L4.807 4.153a.25.25 0 0 1 .205-.403h13.976c.231 0 .33.25.206.403L17.096 6.75z", "fillRule": "evenodd"})
      ]
    );
  }
});
