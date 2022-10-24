const URL = `https://randomuser.me/api/`;

const getUser = async () => { 
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const person = data.results[0];
    console.log(person);
    const { email, phone } = person;
    const { password } = person.login;
    const { large: image } = person.picture;
    const { dob:{ age} } = person;
    const { first, last } = person.name;
    const { street: {number, name }} = person.location;
    return {
      image,
      phone,
      email,
      age,
      password,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
  } catch (error) {
    console.log(error);
  }
}

export default getUser;