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

    <!-- skills -->
    <div>
      <label for="skills">Skills</label>
      <br />
      <small>use commas to add skill, click skill to delete</small>
      <input type="text" id="skills" v-model="tempSkill" @keyup="addSkill" />
      <span
        v-for="skill in skills"
        :key="skill"
        @click="removeSkill(skill)"
        class="pill"
      >
        {{ skill }}
      </span>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Accepted Terms: {{ terms }}</p>
  <p>TempSkill: {{ tempSkill }}</p>
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
      tempSkill: '',
      skills: [],
    };
  },
  methods: {
    handleInput(e) {
      this[e.target.name] = e.target.value;
    },
    addSkill(e) {
      if (e.key === ',' && this.tempSkill.split(',')[0]) {
        if (!this.skills.includes(this.tempSkill.split(',')[0])) {
          this.skills.push(this.tempSkill.split(',')[0]);
        }
        this.tempSkill = '';
      }
    },
    removeSkill(skillToDelete) {
      this.skills = this.skills.filter((skill) => skill !== skillToDelete);
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
small {
  color: #bbb;
  display: block;
  font-size: 0.6em;
  letter-spacing: 1px;
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
