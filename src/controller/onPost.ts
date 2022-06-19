import createError from './createError';
import state from '../model';

const onPost = (req: any, res: any) => {
  if (req.url !== '/api/users') {
    res.statusCode = 404;
    const err = createError(404, 'unknown url adress');
    res.write(JSON.stringify(err, null, 2));
    res.end();
    return;
  }

  let userData: string = '';

  req
    .on('data', (chunk: ArrayBuffer) => {
      userData += chunk;
    })
    .on('end', () => {
      let username: string;
      let age: number;
      let hobbies: string[] = [];

      const reqPairs = userData.split('&');
      reqPairs.map((pair: string) => {
        const filedToken = pair.slice(0, 3);

        if (!filedToken.split('=').includes('use')) {
          res.statusCode = 400;
          const err = createError(
            400,
            'input does not contain all required filed'
          );
          res.write(JSON.stringify(err));
          res.end();
        }

        if (!filedToken.split('=').includes('age')) {
          res.statusCode = 400;
          const err = createError(
            400,
            'input does not contain all required filed'
          );
          res.write(JSON.stringify(err));
          res.end();
        }

        if (!filedToken.split('=').includes('hob')) {
          res.statusCode = 400;
          const err = createError(
            400,
            'input does not contain all required filed'
          );
          res.write(JSON.stringify(err));
          res.end();
        }
        switch (filedToken) {
          case 'use':
            return (username = pair.split('=')[1]);
          case 'age':
            return (age = Number(pair.split('=')[1]));
          case 'hob':
            const hobbiesString = pair.split('=')[1];
            if (hobbiesString !== '') {
              hobbiesString.split('%2C').map((hobby) => hobbies.push(hobby));
            }
            return;
          default:
            res.statusCode = 400;
            const err = createError(
              400,
              `unknown input filed ${pair.split('=')[0]} with property ${
                pair.split('=')[1]
              }`
            );
            res.write(JSON.stringify(err, null, 2));
            res.end();
        }
      });

      const user = state.users.find(
        (user) => user.username === username && user.age === age
      );

      if (user) {
        res.statusCode = 400;
        const err = createError(400, `user already exist`);
        res.write(JSON.stringify(err, null, 2));
        res.end();
        return;
      }

      // this a stub cause I don't permitted to use biblio like lodash to create uniqueID ((
      const getId = () => {
        const id = String(state.usersIDs.count);
        state.usersIDs.count += 1;
        state.usersIDs.ids.push(id);
        return id;
      };

      const newUser: typeof user = {
        id: String(getId()),
        username: username,
        age: age,
        hobbies: Boolean(hobbies) ? hobbies : [],
      };

      state.users.push(newUser);
      state.paths.push('/api/users/' + newUser.id);
      res.statusCode = 201;
      res.write(JSON.stringify(newUser));
      res.end();
    });
};

export default onPost;
