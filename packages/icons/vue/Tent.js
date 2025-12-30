import { defineComponent, h } from 'vue';

export const Tent = defineComponent({
  name: 'Tent',
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
        h('path', {"d": "M12 3.75a.75.75 0 0 1 .576.27c1.915 2.297 3.981 3.573 6.729 4.794l.096.052a.75.75 0 0 1 .349.634v9.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V9.5a.75.75 0 0 1 .445-.686l.508-.229C7.701 7.43 9.63 6.174 11.423 4.02l.057-.061A.75.75 0 0 1 12 3.75m0 10.085c-.613 1.797-1.539 3.407-2.8 4.915h5.6c-1.261-1.508-2.187-3.118-2.8-4.915", "fillRule": "evenodd"})
      ]
    );
  }
});
