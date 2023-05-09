const todo = Vue.createApp({
    data(){
    return{

        arrElement: [
            {
            supermercato: "fare la spesa",
            meccanico: "andare dal meccanico",
            shopping: "compare dei veestiti"  
        },
               
        ],

    };
    
},

methods(){
    
}
});

todo.mount('.root');