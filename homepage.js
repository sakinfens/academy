//when we clock on the next there the next picture
//when we go back its the previous picture



console.log('on');

const pageImage = ['academy-img1.jpg', 'G10_6527.jpg', 'academy-image3.jpg', 'G10_6155.jpg', 'G10_6228.jpg'];
const textBoxWords = ['Ayowole Academy of the Arts was created to establish a combination of art and education in a way that produces opportunities for students to be confident and creative while gearing them for the future.', 'We use art to enforce a well rounded approach to education and ensure students reach their full potential.', 'We instill positive character traits in order to produce good citizens that take responsibility for a positive change in their community.', 'Through your support we  can reach more students and continue to empower them in the arts.', '']
let index = 0;



$('div.circle').on('click', function(){
	let myClass = $(this).attr("class");
	console.log(myClass);

	if (myClass== 'circle circle-1'){
		index = 0;
		console.log(index);
		$('.slideshow').html(`<img src='${pageImage[index]}'>`)
		$('.text-box').html(`<p>${textBoxWords[index]}</p>`)
	}
	if (myClass== 'circle circle-2'){
		index = 1;
		console.log(index);
		$('.slideshow').html(`<img src='${pageImage[index]}'>`)
		$('.text-box').html(`<p>${textBoxWords[index]}</p>`)
	}
	if (myClass== 'circle circle-3'){
		index = 2;
		console.log(index);
		$('.slideshow').html(`<img src='${pageImage[index]}'>`)
		$('.text-box').html(`<p>${textBoxWords[index]}</p>`)
	}
	if (myClass== 'circle circle-4'){
		index = 3;
		console.log(index);
		$('.slideshow').html(`<img src='${pageImage[index]}'>`)
		$('.text-box').html(`<p>${textBoxWords[index]}</p>`)
	}
	if (myClass== 'circle circle-5'){
		index = 4;
		console.log(index);
		$('.slideshow').html(`<img src='${pageImage[index]}'>`)
		$('.text-box').html(`<p>${textBoxWords[index]}</p>`)
	}
});
