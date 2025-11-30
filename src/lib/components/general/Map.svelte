<script lang="ts">
	type MapProps = {
		title?: string;
	};

	const src =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5040.607934169867!2d-6.788455223125486!3d34.04691821800946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a2e8754dbe1%3A0xbea826d1df5ceb!2sDr.%20Amal%20Alouan!5e1!3m2!1sen!2sma!4v1762943574603!5m2!1sen!2sma';

	let { title = 'Localisation de Dr. Amal Alouan' }: MapProps = $props();
</script>

<div class="relative w-full overflow-hidden rounded-[28px] border border-light-grey/60 bg-primary-background shadow-md">
	<div class="relative aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-video">
		<iframe
			title={title}
			src={src}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			allowfullscreen
			class="absolute inset-0 h-full w-full border-0"
		></iframe>
	</div>
</div>
