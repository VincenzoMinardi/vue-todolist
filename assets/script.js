const todo = Vue.createApp({
    data(){
    return{
        newText:{ text: '', done: false},
        
        done: true,
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
    
            this.arrElement.unshift(this.newText);
            this.newText = '';

        }
    }


});

todo.mount('.root');