<template>
  <div>
    <img
      :src="require(`../assets/contact_icon/${contact.icon}`)"
      :alt="contact.method"
    />
    <div>
      <strong> {{ contact.method }} :</strong>
      <ul>
        <li>
          <a
            class="contact-a"
            :href="`${contact.href_method}${contact.contact}`"
            >{{ contact.contact }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
  name: "ContactInfo",
  props: {
    contact: JSON,
  },
  data() {
    return { contacts };
  },
};
</script>

<style>
.contact-content img {
  vertical-align: middle;
  margin-right: 18px;
}

.contact-a {
  color: inherit;
  text-decoration: none;
}

.contact-a:hover {
  color: var(--bs-grey400);
  text-decoration: underline;
}
</style>
