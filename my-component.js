import { ref } from 'vue'

export default {
    setup(){
        const count = ref(0);
        const hello = ()=> {
            return 'Hello World!'
        }
        return { count , hello}

        
    },

    template: `<div>Count is: {{ count }}</div>
                <div>{{ hello }}</div>
               <button @click="count++">Increase</button>`
}