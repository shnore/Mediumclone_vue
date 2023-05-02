<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-lg-6">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }"> Need an account? </router-link>
          </p>
          <mcv-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import McvValidationErrors from "@/components/ValidationErrors.vue";
import { actionTypes } from "@/store/modules/auth";

export default {
  name: "McvLogin",
  components: {
    McvValidationErrors,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
    foo() {},
    // isSubmitting() {
    //   return this.$store.state.auth.isSubmitting
    // },
    // validationErrors() {
    //   return this.$store.state.auth.validationErrors
    // }
  },
  methods: {
    onSubmit() {
      console.log("submitted form");
      this.$store
        .dispatch(actionTypes.login, {
          email: this.email,
          password: this.password,
        })
        .then((user) => {
          console.log("succesfully logged user", user);
          this.$router.push({ name: "globalFeed" });
        });
    },
  },
};
</script>

<style></style>
