import { defineComponent, h } from 'vue';

export const Flame = defineComponent({
  name: 'Flame',
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
        h('path', {"d": "M8.236 3.003a.75.75 0 0 1 .874-.186c2.504 1.144 3.628 3.827 4.147 6.002.113.476.2.939.266 1.372.778-1.31 1.986-2.903 3.636-3.685l.074-.031a.75.75 0 0 1 .96.476l.358 1.078c.367 1.105.746 2.278.974 3.44.289 1.465.359 2.999-.152 4.482l-.11.296c-1.168 2.921-3.943 5.003-7.21 5.003-4.34 0-7.803-3.665-7.803-8.116 0-3.664 1.174-5.567 2.912-8.387.313-.508.645-1.046.991-1.63z", "fillRule": "evenodd"})
      ]
    );
  }
});
