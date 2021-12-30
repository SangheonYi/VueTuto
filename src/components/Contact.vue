<template>
  <div class="contact MaterialCard">
    <div class="contact-container">
      <div class="section-title ">
        <h2>
          Contact me!
        </h2>
      </div>
      <div class="partition">
        <span class="purple-under-line" />
        <span class="dark-purple-under-line" />
        <span class="light-purple-under-line" />
        <span class="deep-purple-under-line" />
        <span class="semi-dark-purple-under-line" />
      </div>
      <ul class="contact-info">
        <li class="contact-content" v-for="element in contacts" :key="element">
          <ContactInfo :contact="element" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ContactInfo from "./ContactInfo.vue";
const contacts = [
  {
    method: "Email",
    icon: "mail_outline_black_24dp.svg",
    contact: "yshgnu@naver.com",
    href_method: "mailto:",
  },
  {
    method: "Phone",
    icon: "phone_in_talk_black_24dp.svg",
    contact: "010-9298-3954",
    href_method: "tel:",
  },
  {
    method: "Github",
    icon: "github.svg",
    contact: "https://github.com/SangheonYi",
    href_method: "",
  },
];
export default {
  name: "Contact",

  data() {
    return { contacts };
  },
  components: {
    ContactInfo,
  },
};
</script>

<style>
.contact-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--bs-grey300);
  background: var(--bs-grey801);
}

.contact-content {
  display: flex;
}

.dark-purple-under-line {
  width: 10%;
  background-color: var(--rally-dark-purple);
}

.purple-under-line {
  width: 25%;
  background-color: var(--rally-purple);
}

.deep-purple-under-line {
  width: 15%;
  background-color: var(--rally-deep-purple900);
}

.light-purple-under-line {
  width: 30%;
  background-color: var(--rally-light-purple);
}

.semi-dark-purple-under-line {
  width: 20%;
  background-color: var(--rally-semi-dark-purple);
}
</style>
