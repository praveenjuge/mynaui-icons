import { defineComponent, h } from 'vue';

export const Coffee = defineComponent({
  name: 'Coffee',
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
        h('path', {"d": "M10.624 3.416a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 0 0 1.248.832zm3 0a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 1 0 1.248.832zm3 0a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 1 0 1.248.832zM4.923 8.25c-.924 0-1.673.749-1.673 1.673V17A4.75 4.75 0 0 0 8 21.75h6A4.75 4.75 0 0 0 18.75 17v-1.25h.75a3.25 3.25 0 0 0 0-6.5h-.91c-.244-.556-.765-1-1.513-1z", "fillRule": "evenodd"})
      ]
    );
  }
});
