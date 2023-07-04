import * as bcrypt from 'bcrypt';

const testdatauser = {
  username: 'nargiz',
  password: '123',
};

export async function POST(req) {
  const body = req.body;
  const data = await body.json();

  //fetch the user from database with giving req body
  const user = () => {
    if (data.username === testdatauser.username) {
      return testdatauser;
    } else {
      false;
    }
  };

  if (user && (await bcrypt.compare(data.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
  } else {
    return new Response(JSON.stringify(null));
  }
}

