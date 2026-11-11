/**
 * Runs before first paint (inlined in the root layout) so the saved lens and
 * theme apply without a flash. Kept tiny and dependency-free.
 */
export const prefsScript = `(function(){try{var d=document.documentElement,l=localStorage.getItem("lens"),t=localStorage.getItem("theme");if(l==="ai-tech"||l==="product"||l==="marketing")d.dataset.lens=l;if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.dataset.theme=t}catch(e){}})()`;
