const { createApp } = Vue

createApp({
  data() {
    return {
    	message: "Hello World",
      tempmessage: "",
      showing: false
    }
  },
  mounted() {
  	// setTimeout(()=>{
    // 	this.showing = true
    // }, 2000)

    window.addEventListener('keypress', this.onKeypress)
    // window.addEventListener('keyup', this.onKeypress)
    // document.onKeypress = this.onKeypress

    window.addEventListener('message', this.onMessage)
  },
  destroyed() {
    window.removeEventListener('message')
  },
  computed: {
  	changestyle() {
    
    	let color = ''
      
      if(this.message == 'Vorp Rules') {
        color = 'red'
      }
    
    	return {'color': color}
    },
    buttonstyle() {
    	let showing = false
  		if(this.message == 'Vorp Rules') {
        showing = true
      }
    
    	return {'difchangebutton': showing}
    }
  },
  watch: {
    showing(data) {
      // Reset dat variables
      this.message = "Hello World"
      this.tempmessage = ""


      // Send data to Nui/Lua
      fetch(`https://${GetParentResourceName()}/update`, {
        method: 'POST',
        body: JSON.stringify({
          status: data
        })
      })
    }
  },
  methods: {
    onKeypress(event) { 
      if (event.key == 'q' || event.key == 'Q') {
      	console.log('Q was pressed!')
      }
    },
    changeMessage() {
    	this.message = this.tempmessage
      fetch(`https://${GetParentResourceName()}/updatemessage`, {
        method: 'POST',
        body: JSON.stringify({
          message: this.message
        })
      })
      /* this.$refs['cstyle'].style.color =  'red'*/
    },
    onMessage(event) {
      if (event.data.type === 'open') {
        this.showing = true
      }
      if (event.data.type === 'close') {
        this.showing = false
      }
    }
  }
  
}).mount('#app')