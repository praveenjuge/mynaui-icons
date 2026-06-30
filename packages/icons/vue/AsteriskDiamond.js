import { defineComponent, h } from 'vue';

export const AsteriskDiamond = defineComponent({
  name: 'AsteriskDiamond',
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
        h('path', {"d": "M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75", "fillRule": "evenodd"})
      ]
    );
  }
});
