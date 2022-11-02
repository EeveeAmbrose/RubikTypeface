$(document).ready(function(){
	
	$('header .main_nav a').click(function(event){
		event.preventDefault()

		var nameOfSectionToScrollTo = $(this).attr('href')

		var howFarToScroll = $(nameOfSectionToScrollTo).offset().top  - 75

		$('html,body').stop().animate({ 
			scrollTop: howFarToScroll
		}, 2500) 
	}) 
})

$(document).ready(function(){
	
	$('#weights li a').click(function(event){
        event.preventDefault();
        
        // var weightClass = $(this).parentElement.attr('class')

        var weightClass = event.target.parentElement.className;
        var selection = $('#weights h2, #weights p');
        selection.removeClass();
        selection.addClass(weightClass)



        // let tog = document.querySelector('.java_stuff');
        console.log(weightClass);
	}) 
})

var list = []

const imageCount = 65
const scrollIncrement = (95 / imageCount)

for(let i = 0; i < imageCount; i++) {
    list.push(`images/cubeani/-_step${i < 10 ? '0' : ''}${i}.svg`)
}

function amountscrolled(){
    var winheight = $(window).height()
    var docheight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = docheight - winheight
    var pctScrolled = scrollTop/trackLength * 100 // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
    console.log(pctScrolled + '% scrolled')

    let headCube = document.getElementById('head_cube')

    let picId = Math.floor(pctScrolled / scrollIncrement)

    if (picId >= imageCount) {
        picId = imageCount - 1
    }

    headCube.setAttribute('src', list[picId]);
    console.log(pctScrolled)
}
 
$(window).on("scroll", function(){
    amountscrolled()

})
 