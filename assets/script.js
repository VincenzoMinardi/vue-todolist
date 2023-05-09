const todo = Vue.createApp({
    data(){
    return{
        
       newText: '', 
    
       arrElement: [
            {
            text: 'andare al supermercato', 
            done: false,

        },
        
        {
            text: 'andare dal meccanico',
            done: true 
        },

        {
            text: 'andare dal parruchiere',
            done: false
        },
        
        {
            text: 'andare a fare shopping',
            done: true
        },

        {
            text: 'pulire il cane',
            done: true
        },
               
        ],

    };
    
},

    methods:{
    
        addText(){
            let cleanedTask = this.newText.trim()
           if(cleanedTask.leghth >= 5){
            this.arrElement.unshift(newObj)
            
              let newObj = {
                text: newText,
                done: false
            }
            this.newTask = ''


           };

        }
    }


});

todo.mount('.root');