<template>
  <form>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" v-model="password" />
    <label for="role">Role:</label>
    <select name="role" id="role" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
    <div>
      <input type="checkbox" required name="terms" id="terms" v-model="terms" />
      <label for="terms">Accept Terms and Conditions</label>
    </div>
    <div>
      <label for="names">Colleagues</label>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="Tomiwa"
          v-model="names"
        />
        <label for="tomiwa">Tomiwa</label>
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="Abbie"
          v-model="names"
        />
        <label for="abbie">Abbie</label>
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="Oyindamola"
          v-model="names"
        />
        <label for="oyin">Oyindamola</label>
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="Tams"
          v-model="names"
        />
        <label for="tams">Tams</label>
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="Samuel"
          v-model="names"
        />
        <label for="samuel">Samuel</label>
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="Ghost"
          v-model="names"
        />
        <label for="ghost">Samuel (Ghost)</label>
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="names"
          value="ibrahim"
          v-model="names"
        />
        <label for="ibrahim">Ibrahim</label>
      </div>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Accepted Terms: {{ terms }}</p>
  <p>
    Colleagues:
    <span v-for="name in names" :key="name">{{ name }}, </span>
  </p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      terms: false,
      names: [],
    };
  },
  methods: {
    handleInput(e) {
      this[e.target.name] = e.target.value;
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
