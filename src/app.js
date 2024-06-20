/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let suit = ["♥", "♠", "♣", "♦"];

let suitTop = document.getElementById("suit-top");
let suitBottom = document.getElementById("suit-bottom");

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    let randomSuit = Math.floor(Math.random() * suit.length);
    suitTop.innerHTML = suit[randomSuit];
    suitBottom.innerHTML = suit[randomSuit];
    document.getElementById("number").innerHTML = generateRandomNumber();

    if (suit[randomSuit] == "♥" || suit[randomSuit] == "♦") {
      suitTop.style.color = "red";
      suitBottom.style.color = "red";
    } else {
      suitTop.style.color = "black";
      suitBottom.style.color = "black";
    }
  });
};

let generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
