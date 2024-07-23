import React from 'react';
import PropType from 'prop-types';

/**
 * @typedef DomPositioningDemonstrationClass
 * @param {string} class_name The class name.
 * @param {string} calculated_value The calculated value of the size of the token.
 * @param {string} additional_example_classes Any additional classes to add to the example.

 */

/**
 * Helper to draw a utility class example.
 * @param {DomPositioningDemonstrationClass} utilityClass The utility class.
 * @returns
 */
const drawRow = (utilityClass) => {
	return (
		<div
			key={utilityClass.class_name}
			className="grid-row site-utility-examples__row margin-bottom-2 padding-bottom-2">
			<div className="grid-col site-utility-examples__class grid-col-fill">
				<span>.{utilityClass.class_name}</span>
			</div>
		</div>
	);
};

/**
 * This component is for demonstrating flex display.
 * @param {Array<TextDemonstrationParams>} param0.utilityClassDisplayParams
 * @returns
 */
const DomPositioningDemonstration = ({ utilityClassDisplayParams }) => {
	return (
		<>
			<div className="site-utility-examples">
				<div className="grid-row site-utility-examples__header-row">
					<div className="grid-col site-utility-examples__heading grid-col-fill">
						<span>Class name</span>
					</div>
				</div>

				{utilityClassDisplayParams.classes &&
					utilityClassDisplayParams.classes.map((utilityClass) =>
						drawRow(utilityClass)
					)}
			</div>
			<section className="site-utility-examples">
				<h4>Example: Relative, static, and absolute positioning</h4>
				<div className="grid-row grid-gap margin-top-2">
					<div className="tablet:grid-col-6">
						<div className="position-relative border-1px border-secondary-light padding-2 margin-bottom-2 radius-md overflow-hidden">
							<div className="position-static height-card border-1px border-secondary-light padding-2">
								<p className="margin-0">
									<span>.position-static</span>
								</p>
								<div className="position-absolute bottom-0 left-0 bg-secondary-light padding-2">
									<p className="margin-0">
										<span>.position-absolute</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="tablet:grid-col-6">
						<div className="position-relative border-1px border-secondary-light padding-2 margin-bottom-2 radius-md overflow-hidden">
							<div className="position-relative height-card border-1px border-secondary-light padding-2">
								<p className="margin-0">
									<span>.position-relative</span>
								</p>
								<div className="position-absolute bottom-0 left-0 bg-secondary-light padding-2">
									<p className="margin-0">
										<span>.position-absolute</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h4>Example: Fixed positioning</h4>
				<div className="radius-md overflow-hidden margin-y-2 border-1px border-secondary-light">
					<div className="position-relative height-mobile">
						<div className="position-absolute pin-top bg-secondary-light z-100 padding-2">
							<span>.position-fixed</span>
						</div>
						<div
							className="position-absolute pin-all overflow-auto padding-top-7 padding-x-3"
							tabIndex="0"
							role="button">
							<div className="measure-6">
								<p className="text-ink">
									<span className="display-inline-block bg-ink text-white padding-x-1 text-bold">
										Scroll me!
									</span>
								</p>
								<p className="line-height-sans-6">
									In compliance with the request of a friend of mine, who wrote
									me from the East, I called on good-natured, garrulous old
									Simon Wheeler, and inquired after my friend&apos;s friend,
									Leonidas W. Smiley, as requested to do, and I hereunto append
									the result.
								</p>
								<p className="line-height-sans-6">
									I found Simon Wheeler dozing comfortably by the bar-room stove
									of the old, dilapidated tavern in the ancient mining camp of
									Angel&apos;s, and I noticed that he was fat and bald-headed,
									and had an expression of winning gentleness and simplicity
									upon his tranquil countenance. He roused up and gave me
									good-day. I told him a friend of mine had commissioned me to
									make some inquiries about a cherished companion of his boyhood
									named Leonidas W. Smiley Rev. Leonidas W. Smiley a young
									minister of the Gospel, who he had heard was at one time a
									resident of Angel&apos;s Camp. I added that, if Mr. Wheeler
									could tell me any thing about this Rev. Leonidas W. Smiley, I
									would feel under many obligations to him.
								</p>
								<p className="line-height-sans-6">
									Simon Wheeler backed me into a corner and blockaded me there
									with his chair, and then sat me down and reeled off the
									monotonous narrative which follows this paragraph. He never
									smiled, he never frowned, he never changed his voice from the
									gentle-flowing key to which he tuned the initial sentence, he
									never betrayed the slightest suspicion of enthusiasm; but all
									through the interminable narrative there ran a vein of
									impressive earnestness and sincerity, which showed me plainly
									that, so far from his imagining that there was any thing
									ridiculous or funny about his story, he regarded it as a
									really important matter, and admired its two heroes as men of
									transcendent genius in finesse. To me, the spectacle of a man
									drifting serenely along through such a queer yarn without ever
									smiling, was exquisitely absurd. As I said before, I asked him
									to tell me what he knew of Rev. Leonidas W. Smiley, and he
									replied as follows. I let him go on in his own way, and never
									interrupted him once:
								</p>
								<p className="line-height-sans-6">
									There was a feller here once by the name of Jim Smiley, in the
									winter of &apos;49 or may be it was the spring of &apos;50 I
									don&apos;t recollect exactly, somehow, though what makes me
									think it was one or the other is because I remember the big
									flume wasn&apos;t finished when he first came to the camp; but
									any way, he was the curiosest man about always betting on any
									thing that turned up you ever see, if he could get any body to
									bet on the other side; and if he couldn&apos;t, he&apos;d
									change sides. Any way that suited the other man would suit him
									any way just so&apos;s he got a bet, he was satisfied. But
									still he was lucky, uncommon lucky; he most always come out
									winner. He was always ready and laying for a chance; there
									couldn&apos;t be no solittry thing mentioned but that
									feller&apos;d offer to bet on it, and -take any side you
									please, as I was just telling you. If there was a horse-race,
									you&apos;d find him flush, or you&apos;d find him busted at
									the end of it; if there was a dog-fight, he&apos;d bet on it;
									if there was a cat-fight, he&apos;d bet on it; if there was a
									chicken-fight, he&apos;d bet on it; why, if there was two
									birds setting on a fence, he would bet you which one would fly
									first; or if there was a camp-meeting, he would be there
									reg&apos;lar, to bet on Parson Walker, which he judged to be
									the best exhorter about here, and so he was, too, and a good
									man. If he even seen a straddle-bug start to go anywheres, he
									would bet you how long it would take him to get wherever he
									was going to, and if you took him up, he would foller that
									straddle-bug to Mexico but what he would find out where he was
									bound for and how long he was on the road. Lots of the boys
									here has seen that Smiley, and can tell you about him. Why, it
									never made no difference to him he would bet on any thing the
									dangdest feller. Parson Walker&apos;s wife laid very sick
									once, for a good while, and it seemed as if they warn&apos;s
									going to save her; but one morning he come in, and Smiley
									asked how she was, and he said she was considerable better
									thank the Lord for his inftnit mercy and coming on so smart
									that, with the blessing of Providence, she&apos;d get well
									yet; and Smiley, before he thought, says, Well, I&apos;ll risk
									two- and-a-half that she don&apos;t, any way.
								</p>
							</div>
						</div>
					</div>
				</div>
				<h4>Example: Sticky positioning</h4>
				<div className="height-mobile position-relative overflow-hidden border border-secondary-light radius-md">
					<div
						className="pin-all overflow-scroll padding-x-2"
						tabIndex="0"
						role="button">
						<div>
							<div className="position-sticky top-0 bg-secondary-light padding-x-2 padding-y-1 text-bold display-flex flex-justify">
								Sticky Heading 1
								<span className="utility-class text-normal">
									.position-sticky
								</span>
							</div>
							<p className="text-ink padding-x-2">
								<span className="display-inline-block bg-ink text-white padding-x-1 text-bold">
									Scroll me!
								</span>
							</p>
							<p className="line-height-sans-6 padding-x-2">
								Thish-yer Smiley had a mare the boys called her the fifteen-
								minute nag, but that was only in fun, you know, because, of
								course, she was faster than that and he used to win money on
								that horse, for all she was so slow and always had the asthma,
								or the distemper, or the consumption, or something of that kind.
								They used to give her two or three hundred yards start, and then
								pass her under way; but always at the fag-end of the race
								she&apos;d get excited and desperate- like, and come cavorting
								and straddling up, and scattering her legs around limber,
								sometimes in the air, and sometimes out to one side amongst the
								fences, and kicking up m-o-r-e dust, and raising m-o-r-e racket
								with her coughing and sneezing and blowing her nose and always
								fetch up at the stand just about a neck ahead, as near as you
								could cipher it down.
							</p>
						</div>
						<div>
							<div className="position-sticky top-0 bg-secondary-light padding-x-2 padding-y-1 text-bold display-flex flex-justify">
								Sticky Heading 2
								<span className="utility-class text-normal">
									.position-sticky
								</span>
							</div>
							<p className="line-height-sans-6 padding-x-2">
								And he had a little small bull pup, that to look at him
								you&apos;d think he wan&apos;s worth a cent, but to set around
								and look ornery, and lay for a chance to steal something. But as
								soon as money was up on him, he was a different dog; his
								underjaw&apos;d begin to stick out like the fo&apos;castle of a
								steamboat, and his teeth would uncover, and shine savage like
								the furnaces. And a dog might tackle him, and bully- rag him,
								and bite him, and throw him over his shoulder two or three
								times, and Andrew Jackson which was the name of the pup Andrew
								Jackson would never let on but what he was satisfied, and
								hadn&apos;t expected nothing else and the bets being doubled and
								doubled on the other side all the time, till the money was all
								up; and then all of a sudden he would grab that other dog jest
								by the j&apos;int of his hind leg and freeze on it not chew, you
								understand, but only jest grip and hang on till they thronged up
								the sponge, if it was a year. Smiley always come out winner on
								that pup, till he harnessed a dog once that didn&apos;t have no
								hind legs, because they&apos;d been sawed off by a circular saw,
								and when the thing had gone along far enough, and the money was
								all up, and he come to make a snatch for his pet bolt, he saw in
								a minute how he&apos;d been imposed on, and how the other dog
								had him in the door, so to speak, and he &apos;peered sur-
								prised, and then he looked sorter discouraged-like, and
								didn&apos;t try no more to win the fight, and so he got shucked
								out bad. He give Smiley a look, as much as to say his heart was
								broke, and it was his fault, for putting up a dog that
								hadn&apos;t no hind legs for him to take bolt of, which was his
								main dependence in a fight, and then he limped off a piece and
								laid down and died. It was a good pup, was that Andrew Jackson,
								and would have made a name for hisself if he&apos;d lived, for
								the stuff was in him, and he had genius I know it, because he
								hadn&apos;t had no opportunities to speak of, and it don&apos;t
								stand to reason that a dog could make such a fight as he could
								under them circumstances, if he hadn&apos;t no talent. It always
								makes me feel sorry when I think of that last fight of
								his&apos;n, and the way it turned out.
							</p>
						</div>
						<div>
							<div className="position-sticky top-0 bg-secondary-light padding-x-2 padding-y-1 text-bold display-flex flex-justify">
								Sticky Heading 3
								<span className="utility-class text-normal">
									.position-sticky
								</span>
							</div>
							<p className="line-height-sans-6 padding-x-2">
								Well, thish-yer Smiley had rat-tarriers, and chicken cocks, and
								tom- cats, and all of them kind of things, till you
								couldn&apos;t rest, and you couldn&apos;t fetch nothing for him
								to bet on but he&apos;d match you. He ketched a frog one day,
								and took him home, and said he cal&apos;klated to edercate him;
								and so he never done nothing for three months but set in his
								back yard and learn that frog to jump. And you bet you he did
								learn him, too. He&apos;d give him a little punch behind, and
								the next minute you&apos;d see that frog whirling in the air
								like a doughnut see him turn one summerset, or may be a couple,
								if he got a good start, and come down flat-footed and all right,
								like a cat. He got him up so in the matter of catching flies,
								and kept him in practice so constant, that he&apos;d nail a fly
								every time as far as he could see him. Smiley said all a frog
								wanted was education, and he could do most any thing and I
								believe him. Why, I&apos;ve seen him set Dan&apos;l Webster down
								here on this floor Dan&apos;l Webster was the name of the frog
								and sing out, Flies, Dan&apos;l, flies! and quicker&apos;n you
								could wink, he&apos;d spring straight up, and snake a fly
								off&apos;n the counter there, and flop down on the floor again
								as solid as a gob of mud, and fall to scratching the side of his
								head with his hind foot as indifferent as if he hadn&apos;t no
								idea he&apos;d been doin&apos; any more&apos;n any frog might
								do. You never see a frog so modest and straightforward as he
								was, for all he was so gifted. And when it come to fair and
								square jumping on a dead level, he could get over more ground at
								one straddle than any animal of his breed you ever see. Jumping
								on a dead level was his strong suit, you understand; and when it
								come to that, Smiley would ante up money on him as long as he
								had a red. Smiley was monstrous proud of his frog, and well he
								might be, for fellers that had traveled and been everywheres,
								all said he laid over any frog that ever they see.
							</p>
						</div>
						<div>
							<div className="position-sticky top-0 bg-secondary-light padding-x-2 padding-y-1 text-bold display-flex flex-justify">
								Sticky Heading 4
								<span className="utility-class text-normal">
									.position-sticky
								</span>
							</div>
							<p className="line-height-sans-6 padding-x-2">
								Well, Smiley kept the beast in a little lattice box, and he used
								to fetch him down town sometimes and lay for a bet. One day a
								feller a stranger in the camp, he was come across him with his
								box, and says:
							</p>
							<p className="line-height-sans-6 padding-x-2">
								What might it be that you&apos;ve got in the box?
							</p>
							<p className="line-height-sans-6 padding-x-2">
								And Smiley says, sorter indifferent like, It might be a parrot,
								or it might be a canary, may be, but it an&apos;t it&apos;s only
								just a frog.
							</p>
							<p className="line-height-sans-6 padding-x-2">
								And the feller took it, and looked at it careful, and turned it
								round this way and that, and says, H&apos;m so &apos;tis. Well,
								what&apos;s he good for?
							</p>
							<p className="line-height-sans-6 padding-x-2">
								Well, Smiley says, easy and careless, He&apos;s good enough for
								one thing, I should judge he can outjump any frog in Calaveras
								county.
							</p>
							<p className="line-height-sans-6 padding-x-2">
								The feller took the box again, and took another long, particular
								look, and give it back to Smiley, and says, very deliberate,
								Well, I don&apos;t see no p&apos;ints about that frog
								that&apos;s any better&apos;n any other frog.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

DomPositioningDemonstration.propTypes = {
	utilityClassDisplayParams: PropType.object,
};

export default DomPositioningDemonstration;
