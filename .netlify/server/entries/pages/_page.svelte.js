import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../chunks/Avatar.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `:root{--theme-font-family-base:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--theme-font-family-heading:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--theme-font-color-base:0 0 0;--theme-font-color-dark:255 255 255;--theme-rounded-base:9999px;--theme-rounded-container:8px;--theme-border-base:1px;--on-primary:255 255 255;--on-secondary:255 255 255;--on-tertiary:0 0 0;--on-success:0 0 0;--on-warning:0 0 0;--on-error:255 255 255;--on-surface:255 255 255;--color-primary-50:254 229 229;--color-primary-100:253 220 221;--color-primary-200:253 211 212;--color-primary-300:252 185 186;--color-primary-400:249 132 135;--color-primary-500:247 79 83;--color-primary-600:222 71 75;--color-primary-700:185 59 62;--color-primary-800:148 47 50;--color-primary-900:121 39 41;--color-secondary-50:252 217 218;--color-secondary-100:251 205 206;--color-secondary-200:250 192 194;--color-secondary-300:246 154 157;--color-secondary-400:240 79 83;--color-secondary-500:233 3 9;--color-secondary-600:210 3 8;--color-secondary-700:175 2 7;--color-secondary-800:140 2 5;--color-secondary-900:114 1 4;--color-tertiary-50:255 219 220;--color-tertiary-100:255 207 209;--color-tertiary-200:255 196 197;--color-tertiary-300:255 160 162;--color-tertiary-400:255 88 93;--color-tertiary-500:255 17 23;--color-tertiary-600:230 15 21;--color-tertiary-700:191 13 17;--color-tertiary-800:153 10 14;--color-tertiary-900:125 8 11;--color-success-50:255 237 237;--color-success-100:255 230 231;--color-success-200:255 224 225;--color-success-300:255 206 207;--color-success-400:255 169 171;--color-success-500:255 132 135;--color-success-600:230 119 122;--color-success-700:191 99 101;--color-success-800:153 79 81;--color-success-900:125 65 66;--color-warning-50:255 236 236;--color-warning-100:255 230 230;--color-warning-200:255 223 224;--color-warning-300:254 204 205;--color-warning-400:254 166 168;--color-warning-500:253 128 131;--color-warning-600:228 115 118;--color-warning-700:190 96 98;--color-warning-800:152 77 79;--color-warning-900:124 63 64;--color-error-50:239 218 218;--color-error-100:233 205 206;--color-error-200:228 193 194;--color-error-300:211 155 157;--color-error-400:178 81 84;--color-error-500:145 6 10;--color-error-600:131 5 9;--color-error-700:109 5 8;--color-error-800:87 4 6;--color-error-900:71 3 5;--color-surface-50:238 217 217;--color-surface-100:232 204 205;--color-surface-200:226 191 192;--color-surface-300:209 153 154;--color-surface-400:175 77 79;--color-surface-500:140 0 3;--color-surface-600:126 0 3;--color-surface-700:105 0 2;--color-surface-800:84 0 2;--color-surface-900:69 0 1}@font-face{font-family:'Quicksand';src:url('/fonts/Quicksand.ttf');font-display:swap}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container h-full mx-auto flex justify-center items-center"><div class="space-y-10 card p-4 variant-ghost-surface text-center flex flex-col items-center"><div>${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      class: "shadow-2xl",
      src: "https://upload.wikimedia.org/wikipedia/en/3/3b/Injury_Reserve_-_By_the_Time_I_Get_to_Phoenix_cover.jpg",
      width: "w-32",
      rounded: "rounded-full"
    },
    {},
    {}
  )}</div>
		<h1 class="h1">ian</h1>
		<div class="card p-4 variant-ghost-error"><p>c++ c# &amp; lua dev</p></div>
		<iframe style="width:400px;" class="rounded-md w-full sm:w-3/6" src="https://open.spotify.com/embed/track/5s0oWj51ttqiINWWJynNPz" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" height="80" frameborder=""></iframe></div>
</div>`;
});
export {
  Page as default
};
