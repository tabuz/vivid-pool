<template>
  <v-form
    ref="contact_form"
    v-model="is_form_valid"
    class="px-2 blurp"
    color="secondary"
  >
    <v-text-field
      v-model="name"
      color="secondary"
      autocomplete="new-password"
      type="text"
      :label="`${$t('contact_form.name')}`"
    ></v-text-field>
    <v-text-field
      v-model="email"
      autocomplete="new-password"
      :rules="[(v) => !!v || 'This field is required']"
      color="secondary"
      label="Email *"
      hint="So we could reach you back"
      type="email"
      required
    ></v-text-field>
    <v-textarea
      v-model="message"
      autocomplete="new-password"
      color="secondary"
      :label="`${$t('contact_form.message')}*`"
      required
    ></v-textarea>
    <div class="text-right">
      <button
        class="choice-btn"
        :class="{
          success: success,
        }"
        :data-back="`${$t('contact_form.send_back')}`"
        data-success="wysłano"
        :disabled="is_form_valid === false"
        @click.prevent.stop="send_message"
      >
        {{ $t('contact_form.send_front') }}
      </button>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      is_form_valid: false,
      success: false,
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    async send_message() {
      const url =
        'https://discordapp.com/api/webhooks/818115094205693952/diMC7x0IX-KGdxTD5x9EYbYoqdHK69mU_xqu3YUxRjgQpHa2P7PcL_3j5TDw7HBZXa9m'
      try {
        await this.$axios.post(url, {
          content: 'New message from vivid-pool.info',
          embeds: [
            {
              fields: [
                {
                  name: 'Name',
                  value: this.name,
                  inline: true,
                },
                {
                  name: 'Email',
                  value: this.email,
                  inline: true,
                },
                {
                  name: 'Message',
                  value: this.message,
                },
              ],
            },
          ],
        })
        this.$refs.contact_form.reset()
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000)
      } catch (error) {
        console.log('error')
      }
    },
  },
}
</script>
