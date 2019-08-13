const content = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", changeSomething);

function changeSomething() {
  content.textContent =
    "See I made that long text disappear right infront of your eyes.I'll make it come back in a minute";
  setTimeout(function() {
    content.textContent =
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus sed dignissimos officia temporibus? Eum, earum tempore natus autem, fugiatenim rem sint esse laboriosam distinctio perferendis praesentium aliquid? Veniam!";
  }, 4000);
}
