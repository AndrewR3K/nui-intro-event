const { createApp } = Vue

  createApp({
    data() {
      return {
      }
    },
    mounted() {
      window.addEventListener('message', this.onMessage);
    },
    destroyed() {
      window.removeEventListener('message')
    },
    methods: {
        onMessage(event) {
          if (event.data.type === 'open') {
          }
        },
        toggleUI(status) {
          this.visible = status
        
          fetch(`https://${GetParentResourceName()}/update`, {
            method: 'POST',
            body: JSON.stringify({
              status: this.visible
            })
          })
        }
    }
  }).mount('#app')