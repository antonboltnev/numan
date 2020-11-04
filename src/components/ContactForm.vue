<template>
  <div class="ContactForm">
    <ui-grid class="ui-ta_center">
      <ui-grid-col size-w="auto">
        <h1>Pls fill the form below:</h1>
      </ui-grid-col>
    </ui-grid>
    <validation-observer ref="form">
      <ui-grid class="user_data_form">
        <ui-grid-col size-w="100">
          <validation-provider
            v-slot="{ errors }"
            :rules="{ required: true }"
            name="Firstname"
            mode="eager"
          >
            <ui-textfield
              placeholder="Firstname*"
              :errors="errors"
              v-model="firstName"
              @clear="clearInputValue('firstName')"
            />
          </validation-provider>
        </ui-grid-col>
        <ui-grid-col size-w="100">
          <validation-provider
            v-slot="{ errors }"
            :rules="{ required: true }"
            name="Lastname"
            mode="eager"
          >
            <ui-textfield
              placeholder="Lastname*"
              :errors="errors"
              v-model="lastName"
              @clear="clearInputValue('lastName')"
            />
          </validation-provider>
        </ui-grid-col>
        <ui-grid-col size-w="100">
          <validation-provider
            v-slot="{ errors }"
            :rules="{ required: true }"
            name="Phone"
            mode="eager"
          >
            <ui-textfield
              placeholder="Phone*"
              :errors="errors"
              v-model="phone"
              @clear="clearInputValue('phone')"
            />
          </validation-provider>
        </ui-grid-col>
        <ui-grid-col size-w="100">
          <validation-provider
            v-slot="{ errors }"
            :rules="{ required: true, email: true }"
            name="E-mail"
            mode="eager"
          >
            <ui-textfield
              placeholder="E-mail*"
              :errors="errors"
              v-model="email"
              @clear="clearInputValue('email')"
            />
          </validation-provider>
        </ui-grid-col>
      </ui-grid>
    </validation-observer>
    <ui-grid class="row justify-center">
      <ui-grid-col size-w="50">
        <ui-btn @click="toConfirmationPage">
          <span>Next</span>
        </ui-btn>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "ContactForm",
  data: () => ({
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
  }),
  methods: {
    ...mapActions("CommonStore", ["setFlowEvent"]),
    ...mapMutations("CommonStore", ["SET_FLOW_DATA_TO_STORE"]),
    clearInputValue(name) {
      this[name] = null;
    },
    async toConfirmationPage() {
      const validation = await this.$refs.form.validate();
      if (validation) {
        this.setFlowEvent({
          event: "user-entered-contact-data",
          payload: {
            type: "user_data",
            data: {
              attributes: {
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone,
                email: this.email,
              },
            },
          },
        }).then(() => {
          this.SET_FLOW_DATA_TO_STORE({
            key: "userData",
            value: {
              type: "user_data",
              data: {
                attributes: {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  phone: this.phone,
                  email: this.email,
                },
              },
            },
          });
          this.$router.push({ name: "Confirmation" });
        });
      }
    },
  },
};
</script>

<style lang="scss">
.ContactForm {
  & .user_data_form {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>
