$(function(){
    let sliders = $('.slide')

    let firstPage = 0
    let lastPage = sliders.length - 1
    let curr = 0
    
    $(sliders).hide()
    $(sliders.eq(curr)).show()

    $('#slide-left').click(()=>{
        $(sliders).hide(300).fadeOut(200)
        if(curr <= firstPage){
            curr = lastPage
        }
        else{
            curr--
        }
        $(sliders.eq(curr)).show(300).fadeIn(200)
    })

    $('#slide-right').click(()=>{
        $(sliders).hide(300).fadeOut(200)
        if(curr >= lastPage){
            curr = firstPage
        }
        else{
            curr++
        }
        $(sliders.eq(curr)).show(300).dafeIn(200)
    })
})