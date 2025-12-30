import { defineComponent, h } from 'vue';

export const DoorOpen = defineComponent({
  name: 'DoorOpen',
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
        h('path', {"d": "M20.5 19.53h-1.917V5.665c0-1.51-1.251-2.695-2.75-2.695h-1.161a1.75 1.75 0 0 0-1.85-1.211l-.2.032-6.611 1.44a.75.75 0 0 0-.591.733V5.61l-.003.058V19.53H3.5a.75.75 0 0 0 0 1.5H7l.077-.004q.03-.003.062-.01l5.483 1.193.2.032a1.75 1.75 0 0 0 1.85-1.21H20.5l.077-.005a.75.75 0 0 0 0-1.492zM17.083 5.665V19.53H14.75V4.47h1.083c.71 0 1.25.553 1.25 1.195m-6.833 5.36a.75.75 0 0 1 1.5 0v1.95a.75.75 0 0 1-1.5 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
