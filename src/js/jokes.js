import joker from "give-me-a-joke";

export default function dadJoke() {
  return new Promise(function (resolve) {
    joker.getRandomDadJoke(resolve);
  });
}
