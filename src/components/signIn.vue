<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit="submit($event)">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-5">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-end">
          <div class="text-sm">
            <router-link
              to="/sign-up"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Create a new account?
            </router-link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
              cursor-pointer
            "
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardSignin",

  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      var payload = {
        email: this.email,
        password: this.password,
      };
      this.axios
        .post("http://localhost:3000/login", payload)
        .then((response) => {
          if (response.status === 200) {
            (this.email = ""), (this.password = "");
            this.$router.push("/dashboard");
          } else {
            //
          }
        })
    },
  },
  mounted() {},
};
</script>