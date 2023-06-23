<script>
	import { Avatar } from "@skeletonlabs/skeleton";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 card p-4 variant-ghost-surface text-center flex flex-col items-center">
		<div>
			<Avatar class="shadow-2xl" src="https://upload.wikimedia.org/wikipedia/en/3/3b/Injury_Reserve_-_By_the_Time_I_Get_to_Phoenix_cover.jpg" width="w-32" rounded="rounded-full" />
		</div>
		<h1 class="h1">ian</h1>
		<div class="card p-4 variant-ghost-error">
			<p>c++ c# & lua dev</p>
		</div>
		<iframe style="width:400px;" class="rounded-md w-full sm:w-3/6" src="https://open.spotify.com/embed/track/5s0oWj51ttqiINWWJynNPz" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" height="80" frameborder="" />
	</div>
</div>

<style lang="postcss">
	:root {
		/* =~= Theme Properties =~= */
		--theme-font-family-base: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		--theme-font-family-heading: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		--theme-font-color-base: 0 0 0;
		--theme-font-color-dark: 255 255 255;
		--theme-rounded-base: 9999px;
		--theme-rounded-container: 8px;
		--theme-border-base: 1px;
		/* =~= Theme On-X Colors =~= */
		--on-primary: 255 255 255;
		--on-secondary: 255 255 255;
		--on-tertiary: 0 0 0;
		--on-success: 0 0 0;
		--on-warning: 0 0 0;
		--on-error: 255 255 255;
		--on-surface: 255 255 255;
		/* =~= Theme Colors  =~= */
		/* primary | #f74f53 */
		--color-primary-50: 254 229 229; /* ⬅ #fee5e5 */
		--color-primary-100: 253 220 221; /* ⬅ #fddcdd */
		--color-primary-200: 253 211 212; /* ⬅ #fdd3d4 */
		--color-primary-300: 252 185 186; /* ⬅ #fcb9ba */
		--color-primary-400: 249 132 135; /* ⬅ #f98487 */
		--color-primary-500: 247 79 83; /* ⬅ #f74f53 */
		--color-primary-600: 222 71 75; /* ⬅ #de474b */
		--color-primary-700: 185 59 62; /* ⬅ #b93b3e */
		--color-primary-800: 148 47 50; /* ⬅ #942f32 */
		--color-primary-900: 121 39 41; /* ⬅ #792729 */
		/* secondary | #e90309 */
		--color-secondary-50: 252 217 218; /* ⬅ #fcd9da */
		--color-secondary-100: 251 205 206; /* ⬅ #fbcdce */
		--color-secondary-200: 250 192 194; /* ⬅ #fac0c2 */
		--color-secondary-300: 246 154 157; /* ⬅ #f69a9d */
		--color-secondary-400: 240 79 83; /* ⬅ #f04f53 */
		--color-secondary-500: 233 3 9; /* ⬅ #e90309 */
		--color-secondary-600: 210 3 8; /* ⬅ #d20308 */
		--color-secondary-700: 175 2 7; /* ⬅ #af0207 */
		--color-secondary-800: 140 2 5; /* ⬅ #8c0205 */
		--color-secondary-900: 114 1 4; /* ⬅ #720104 */
		/* tertiary | #ff1117 */
		--color-tertiary-50: 255 219 220; /* ⬅ #ffdbdc */
		--color-tertiary-100: 255 207 209; /* ⬅ #ffcfd1 */
		--color-tertiary-200: 255 196 197; /* ⬅ #ffc4c5 */
		--color-tertiary-300: 255 160 162; /* ⬅ #ffa0a2 */
		--color-tertiary-400: 255 88 93; /* ⬅ #ff585d */
		--color-tertiary-500: 255 17 23; /* ⬅ #ff1117 */
		--color-tertiary-600: 230 15 21; /* ⬅ #e60f15 */
		--color-tertiary-700: 191 13 17; /* ⬅ #bf0d11 */
		--color-tertiary-800: 153 10 14; /* ⬅ #990a0e */
		--color-tertiary-900: 125 8 11; /* ⬅ #7d080b */
		/* success | #ff8487 */
		--color-success-50: 255 237 237; /* ⬅ #ffeded */
		--color-success-100: 255 230 231; /* ⬅ #ffe6e7 */
		--color-success-200: 255 224 225; /* ⬅ #ffe0e1 */
		--color-success-300: 255 206 207; /* ⬅ #ffcecf */
		--color-success-400: 255 169 171; /* ⬅ #ffa9ab */
		--color-success-500: 255 132 135; /* ⬅ #ff8487 */
		--color-success-600: 230 119 122; /* ⬅ #e6777a */
		--color-success-700: 191 99 101; /* ⬅ #bf6365 */
		--color-success-800: 153 79 81; /* ⬅ #994f51 */
		--color-success-900: 125 65 66; /* ⬅ #7d4142 */
		/* warning | #fd8083 */
		--color-warning-50: 255 236 236; /* ⬅ #ffecec */
		--color-warning-100: 255 230 230; /* ⬅ #ffe6e6 */
		--color-warning-200: 255 223 224; /* ⬅ #ffdfe0 */
		--color-warning-300: 254 204 205; /* ⬅ #fecccd */
		--color-warning-400: 254 166 168; /* ⬅ #fea6a8 */
		--color-warning-500: 253 128 131; /* ⬅ #fd8083 */
		--color-warning-600: 228 115 118; /* ⬅ #e47376 */
		--color-warning-700: 190 96 98; /* ⬅ #be6062 */
		--color-warning-800: 152 77 79; /* ⬅ #984d4f */
		--color-warning-900: 124 63 64; /* ⬅ #7c3f40 */
		/* error | #91060a */
		--color-error-50: 239 218 218; /* ⬅ #efdada */
		--color-error-100: 233 205 206; /* ⬅ #e9cdce */
		--color-error-200: 228 193 194; /* ⬅ #e4c1c2 */
		--color-error-300: 211 155 157; /* ⬅ #d39b9d */
		--color-error-400: 178 81 84; /* ⬅ #b25154 */
		--color-error-500: 145 6 10; /* ⬅ #91060a */
		--color-error-600: 131 5 9; /* ⬅ #830509 */
		--color-error-700: 109 5 8; /* ⬅ #6d0508 */
		--color-error-800: 87 4 6; /* ⬅ #570406 */
		--color-error-900: 71 3 5; /* ⬅ #470305 */
		/* surface | #8c0003 */
		--color-surface-50: 238 217 217; /* ⬅ #eed9d9 */
		--color-surface-100: 232 204 205; /* ⬅ #e8cccd */
		--color-surface-200: 226 191 192; /* ⬅ #e2bfc0 */
		--color-surface-300: 209 153 154; /* ⬅ #d1999a */
		--color-surface-400: 175 77 79; /* ⬅ #af4d4f */
		--color-surface-500: 140 0 3; /* ⬅ #8c0003 */
		--color-surface-600: 126 0 3; /* ⬅ #7e0003 */
		--color-surface-700: 105 0 2; /* ⬅ #690002 */
		--color-surface-800: 84 0 2; /* ⬅ #540002 */
		--color-surface-900: 69 0 1; /* ⬅ #450001 */
		
	}

	html,
	body {
		@apply h-full overflow-hidden;
	}

	@font-face {
		font-family: 'Quicksand';
		src: url('/fonts/Quicksand.ttf');
		font-display: swap;
	}
</style>
