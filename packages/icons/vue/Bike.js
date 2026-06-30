import { defineComponent, h } from 'vue';

export const Bike = defineComponent({
  name: 'Bike',
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
        h('path', {"d": "M10.71 18.25v-3.454l-1.917-1.918a1 1 0 0 1 0-1.414l4.42-4.421a1 1 0 0 1 1.432.017l1.914 2.005h1.783a1 1 0 0 1 0 2h-2.21a1 1 0 0 1-.724-.31l-1.505-1.574-2.989 2.99 1.504 1.504c.187.187.293.442.293.707v3.868a1 1 0 0 1-2 0m9.039-13a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0", "fillRule": "evenodd"}),
        h('path', {"d": "M21.151 19.901a3.75 3.75 0 0 0 1.094-2.465l.005-.186a3.75 3.75 0 0 0-7.5 0l.005.186A3.75 3.75 0 0 0 18.5 21l.186-.005a3.75 3.75 0 0 0 2.465-1.094M9.25 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0", "fillRule": "evenodd"})
      ]
    );
  }
});
