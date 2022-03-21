<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">New User?</h3>
          <p class="mt-1 text-sm text-gray-600">Create a new account</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit="submit($event)">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    v-model="firstName"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <input
                    v-model="lastName"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-4 block">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    v-model="email"
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="continent"
                    class="block text-sm font-medium text-gray-700"
                    >Continent</label
                  >
                  <select
                    v-model="continent"
                    id="continent"
                    name="continent"
                    autocomplete="continent-name"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                  >
                    <option value="" disabled>Choose...</option>
                    <option
                      :value="world.value"
                      v-for="world in worlds"
                      :key="world.value"
                    >
                      {{ world.text }}
                    </option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="gender"
                    class="block text-sm font-medium text-gray-700"
                    >Gender</label
                  >
                  <select
                    v-model="gender"
                    id="gender"
                    name="gender"
                    autocomplete="gender-name"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                  >
                    <option value="" disabled>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="password"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-3
                  px-10
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-500
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "DashboardSignup",

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      continent: "",
      gender: "",
      password: "",
      worlds: [
        { value: "Africa", text: "Africa" },
        { value: "Antarctica", text: "Antarctica" },
        { value: "Asia", text: "Asia" },
        { value: "Australia", text: "Australia" },
        { value: "Europe", text: "Europe" },
        { value: "North America", text: "North America" },
        { value: "South America", text: "South America" },
      ],
    };
  },

  methods: {
    submit(event) {
      event.preventDefault();
      var payload = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        continent: this.continent,
      };
      var url = window.location.origin;
      this.axios
        .post(url + "/register", payload)
        .then((response) => {
          console.log(response);
          (this.email = ""),
            (this.password = ""),
            (this.firstName = ""),
            (this.lastName = ""),
            (this.gender = ""),
            (this.continent = "");
            this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>