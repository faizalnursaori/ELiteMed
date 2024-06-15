import axios from "axios";

const API_RANDOM_USER = "https://randomuser.me/api/";

export const fetchOurTeam = async () => {
  const initialPerson = {
    firstName: "",
    lastName: "",
    picture: "",
  };

  try {
    const ourTeam = [];
    for (let index = 0; index < 3; index++) {
      const person = { ...initialPerson };
      const response = await axios.get(API_RANDOM_USER);
      person.firstName = response.data.results[0].name.first;
      person.lastName = response.data.results[0].name.last;
      person.picture = response.data.results[0].picture.large;
      ourTeam.push(person);
    }
    return ourTeam;
  } catch (error) {
    console.error(error);
  }
};
