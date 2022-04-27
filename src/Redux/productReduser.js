const defaultState ={
    items:[
        {
            cost:100,
            title:'name Product1',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, non.',    
            presence:true,
            img:'https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80'
        },
        {
            cost:100,
            title:'name Product2',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit.',    
            presence:true,
            img:'https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80'
        },
        {
            cost:100,
            title:'name Product3',
            description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, ex!',    
            presence:true,
            img:'https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80'
        },
        {
            cost:100,
            title:'name Product4',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem.',    
            presence:true,
            img:'https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80'
        },
        {
            cost:100,
            title:'name Product5',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, est.',    
            presence:true,
            img:'https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80'
        },
        {
            cost:100,
            title:'name Product6',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, praesentium.',    
            presence:true,
            img:'https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80'
        },
    ]
}

const productReduser = (state = defaultState,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default productReduser