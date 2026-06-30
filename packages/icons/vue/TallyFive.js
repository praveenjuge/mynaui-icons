import { defineComponent, h } from 'vue';

export const TallyFive = defineComponent({
  name: 'TallyFive',
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
        h('path', {"d": "M21.53 2.47a.75.75 0 0 1 0 1.06l-.78.78V20a.75.75 0 0 1-1.5 0V5.81l-3.833 3.834V20a.75.75 0 0 1-1.5 0v-8.856l-3.834 3.833V20a.75.75 0 1 1-1.5 0v-3.523L3.53 21.53a.75.75 0 0 1-1.06-1.06l.78-.78V4a.75.75 0 0 1 1.5 0v14.19l3.833-3.834V4a.75.75 0 0 1 1.5 0v8.856l3.834-3.833V4a.75.75 0 0 1 1.5 0v3.523L20.47 2.47a.75.75 0 0 1 1.06 0", "fillRule": "evenodd"})
      ]
    );
  }
});
