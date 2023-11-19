AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId : {default : "", type : "string"}
    },
    init : function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    update : function(){
        const fadeBackgroundEl = document.querySelector("#fade-background")

        c = fadeBackgroundEl.children
        if(c.length >0){
            var i
            for (i = 0; i <= c.length; i ++){
                fadeBackgroundEl.removeChild(c[i])
            }
        }
        else{
            this.handleClickEvents()
        }
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
                    if (selectedCard){
                        fadeBackgroundEl.setAttribute("visible", false)
                        fadeBackgroundEl.setAttribute("info-banner"),{
                            itemId : selectedCard,
                        }

                        titleEl.setAttribute('visible', false)
                        cursorEl.setAttribute("position", {x : 0, y : 0, z :-1})
                        cursorEl.setAttribute("geometry",{
                            radiusInner : 0.03,
                            radiusOuter : 0.04
                        })
                
                    }
                    else{
                        fadeBackgroundEl.setAttribute("visible", false)
                        titleEl.setAttribute("visible", true)
                        cursorEl.setAttribute("position", {x : 0, y : 0, z : -3})
                        cursorEl.setAttribute("geometry",{
                            radiusInner: 0.08,
                            radiusOuter : 0.12
                        })
                    }
                }
            }
        })
    },

    handleComicsListState: function(){
        const id = this.el.getAttribute("id")
        const posterId = ["hulk", "batman","spiderman","wonder_woman"]
        if(posterId.includes(id)){
            const placesContainer = document.querySelector("places-container")
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
