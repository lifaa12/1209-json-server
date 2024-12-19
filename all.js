let token = "";
let id = "";
const register = async () => {
  try {
    const res = await axios.post("http://localhost:3000/register", {
      "email": "vbdffgfbb@gmail.com",
      "password": "b1ddfg2dsd"
    });
    console.log(res);
  } catch (error) {
    console.log(error);

  }
}
const login = async () => {
  try {
    const res = await axios.post("http://localhost:3000/login", {
      "email": "vbdffgfbb@gmail.com",
      "password": "33312345"
    });
    console.log(res);
    token = res.data.accessToken;
    id = res.data.user.id;
  } catch (error) {
    console.log(error.response.data);

  }
}

const updatePassword = async () => {
  try {
    const res = await axios.patch("http://localhost:3000/600/users/5", {
      "password": "33312345"
    }, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    console.log(res);
  } catch (error) {
    console.log(error);

  }
}

const addPost = async () => {
  try {
    axios.post("http://localhost:3000/600/posts", {
      content: "今天要洗臉",
      userId: id
    }, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    })
  } catch (error) {
    console.log(error);

  }
}