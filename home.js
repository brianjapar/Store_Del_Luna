$(function(){
    let sliders = $('.slide')

    let firstPage = 0
    let lastPage = sliders.length - 1
    let curr = 0
    
    $(sliders).hide()

    $(sliders.eq(curr)).show()

    $('#slide-left').click(()=>{
        $(sliders).fadeOut(30)
        if(curr <= firstPage){
            curr = lastPage
        }
        else{
            curr--
        }
        $(sliders.eq(curr)).fadeIn(30)
    })

    $('#slide-right').click(()=>{
        $(sliders).fadeOut(30)
        if(curr >= lastPage){
            curr = firstPage
        }
        else{
            curr++
        }
        $(sliders.eq(curr)).fadeIn(30)
    })
})