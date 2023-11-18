AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId : {default : "", type : "string"}
    },
    init : function(){
        this.handleClickEvents()
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    handleClickEvents: function(){
        this.el.addEventListener("click", evt => {
            const placesContainer = document.querySelector("#places-container")
            const {state} = placesContainer.getAttribute("poster")

            if(state === "places-list"){
                const id = this.el.getAttribute("id")
                const posterId = [
                    "hulk",
                    "batman",
                    "spiderman",
                    "wonder_woman"
                ]
                if (posterId.includes(id)){
                    placesContainer.setAttribute('poster',{
                        state : "view",
                        selectedCard : id
                    })
                }
            }
        })
    },

    handleComicsListState: function(){
        const id = this.el.getAttribute("id")
        const posterId = ["hulk", "batman","spiderman","wonder_woman"]
        if(posterId.includes(id)){
            const placesContainer = document.querySelector("places-conatiner")
            placesContainer.setAttribute("cursor-listener",{
                selectedItemId : id
            })
            this.el.setAttribute("material",{
                color : "#D76B30",
                opacity : 1
            })
        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handleComicsListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleaves",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
            
                if (id == selectedItemId){
                    el.setAttribute("material",{
                        color : "#0077CC",
                        opacity : 1
                    })
                }
            }
        })
    }
})