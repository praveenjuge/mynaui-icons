import { defineComponent, h } from 'vue';

export const LetterBDiamond = defineComponent({
  name: 'LetterBDiamond',
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
        h('path', {"d": "M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45-.065.625-.45 1.05-1.07 1.05z", "fillRule": "evenodd"}),
        h('path', {"d": "M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393.085-.806-.153-1.706-.767-2.357.614-.651.852-1.551.767-2.357-.125-1.19-.99-2.393-2.562-2.393z", "fillRule": "evenodd"})
      ]
    );
  }
});
