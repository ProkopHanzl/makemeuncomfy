var sentences = [
	"You are now breathing manually.",
	"You are now blinking manually.",
	"You can feel your clothes touching your body.",
	"You can feel your tongue in your mouth.",
	"You can feel your toes touching.",
	"You can feel the chair you're sitting in.",
	"You can feel your hair touching your head.",
	"You feel an itch on your body.",
	"Your crotch is uncomfortable.",
	"You can always see your nose.",
	"You just lost the game.",
	"Imagine fingernails scratching against a whiteboard.",
	"Imagine biting down on a metal fork.",
	"Swallow that saliva.",
	"Don't you need to clear your throat?",
	"Your lips are dry.",
	"You are hearing this sentence as you read it.",
	"Moist.",
	"Your face is crawling with parasites. Google it.",
	"You can get a brain aneurysm whenever, wherever.",
	"There are at least 8 nuclear weapons known to be missing.",
	"Over 80% of households have mites.",
	"Ancient Romans used urine as mouthwash.",
	"People in the Pokémon universe either are vegetarians or eat Pokémon, as there are no other animals.",
	"Think of all the earwax in your ears.",
	"There are mites in your eyelashes.",
	"When you get a kidney transplant, they just leave the old one in there.",
	"Imagine watching a movie with a sex scene with your parents.",
	"Remember that one awkward moment of your life.",
	"Fruit flies' sperm cells would be over 2 inches long when uncoiled.",
	"A raccoon could fit in your ass.",
	"There's hundreds of dead bodies on Mt. Everest. They're used as waypoints for other climbers.",
	"Mosquitoes spit in your blood when biting you.",
	"Are you sure you don't have a tick on your back?",
	"In the Victorian Era, it was common to take pictures with the bodies of dead family members.",
	"Imagine someone pinching your cheek.",
	"You always hold your breath when you poop.",
	"Imagine a paper cut on your eye.",
	"Don't you need to wash your hands?",
	"Don't you need to yawn?",
	"Imagine a nail clipper. Imagine clipping your tooth with it.",
	"Your jaw has weight. You're now manually holding it up.",
	"Imagine burning your tongue on a hot drink.",
	"Never gonna give you up...",
	"Don't you need to wipe your dirty screen?",
	"You can hear all the noises around you.",
	"Imagine your collarbone breaking.",
	"You can now taste your saliva.",
	"Imagine a needle between your bottom and top teeth. Bite down hard.",
	"Pay attention to the movement of your eyes.",
	"You can still blink with your eyes closed.",
	"Go ahead, clench your asshole.",
	"You need to go to the bathroom.",
	"When you shook your hands with someone, they might have jacked off with that hand less than a day ago.",
	"Aren't your eyes getting dry?",
	"You don't know what to do with your left hand when scrolling.",
	"Imagine your parents having sex.",
	"Put a toothpick under your toenail. Kick a wall. Pull it back out.",
	"Imagine stubbing your toe.",
	"On a clock, the hour hand is the first hand, the minute hand is the second hand, and the second hand is the third hand.",
	"Imagine the sound of styrofoam coming out of a cardboard box.",
	"Chances are, someone much older than you is sexually attracted to you.",
	'"Homeowner" sounds like "ho\' moaner". Good luck trying not to hear it like that.',
	"Imagine pushing your eyes inside of your head.",
	"Your legs are restless now.",
	"Good news, everyone!<br>You read that in the Professor's voice.",
	"Imagine erasing something with your pencil eraser. There's no eraser left. You hear the metal scratching against the paper.",
	"Imagine washing your hands and getting your sleeves wet.",
	"Imagine stepping on a lego.",
	"Imagine sitting on a thumbtack.",
	"Imagine stepping into a puddle in just socks.",
	"Imagine biting down on some sandpaper and yanking it from in between your teeth.",
	"Imagine eating some salad. But there's sand in it.",
	"<span style='position: relative; left: 2rem;'>This text is not centered.</span>",
];

function setUncomfy() {
	var random = Math.floor(Math.random() * sentences.length);
	document.getElementById("uncomfy").innerHTML = sentences[random];
}

document.getElementById("uncomfy-button").addEventListener("click", function () {
	setUncomfy();
	document.activeElement.blur();
});

if (navigator.canShare) {
	document.getElementById("share-button").addEventListener("click", function () {
		navigator.share({
			title: "makemeuncomfy",
			text: document.getElementById("uncomfy").innerHTML,
			url: "https://prokophanzl.github.io/makemeuncomfy/",
		});
	});
} else {
	document.getElementById("share-button").style.display = "none";
}

document.getElementById("tweet-button").addEventListener("click", function () {
	var text = document.getElementById("uncomfy").innerHTML;
	var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=https://prokophanzl.github.io/makemeuncomfy/";
	window.open(url, "_blank");
});

setUncomfy();
