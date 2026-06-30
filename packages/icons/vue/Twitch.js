import { defineComponent, h } from 'vue';

export const Twitch = defineComponent({
  name: 'Twitch',
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
        h('path', {"d": "M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 .75.75v10.8a.75.75 0 0 1-.216.527l-3.556 3.6a.75.75 0 0 1-.534.223h-4.13l-3.336 3.377A.75.75 0 0 1 7.694 21v-2.85H4a.75.75 0 0 1-.75-.75zm8.611 4.5a.75.75 0 0 0-1.5 0v3.6a.75.75 0 0 0 1.5 0zm3.695-.75a.75.75 0 0 0-.75.75v3.6a.75.75 0 1 0 1.5 0V7.5a.75.75 0 0 0-.75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
