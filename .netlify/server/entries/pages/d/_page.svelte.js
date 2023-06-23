import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container h-full mx-auto flex justify-center items-center"><div class="space-y-10 card p-4 variant-ghost-surface text-center flex flex-col items-center"><div>${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      class: "shadow-2xl",
      src: "https://cdn.discordapp.com/embed/avatars/0.png",
      width: "w-32",
      rounded: "rounded-full"
    },
    {},
    {}
  )}</div>
		<h1 class="h1">rpa</h1>
		<div class="card p-4 variant-ghost-tertiary"><p>SkeeYee</p></div>
		<iframe title="f" style="width:400px;" class="rounded-md w-full sm:w-3/6" src="https://open.spotify.com/embed/track/7icwQvajsokotDfM3tefW6" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" height="80" frameborder=""></iframe></div>
</div>`;
});
export {
  Page as default
};
