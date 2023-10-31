"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 50,
}) // 노력하는 웹퍼블리셔|
  .move(-11)
  .type("항샹 ")
  .pause(1000)
  .move(null, { to: "END" })
  .delete()
  .type("프론트엔드 엔지니어")
  .move(-5)
  .delete(5)
  .type("백엔드")
  .delete(5)
  .type("풀스택")
  .move(11)
  .delete()
  .go();
