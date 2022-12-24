/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import fetch from 'node-fetch';

const token = process.env.FB_TOKEN;

fetch('https://kloun.lol/api/joke/random/')
  .then((res) => res.json())
  .then((json1) => {
    const { id } = json1[0]._id;
    const child_attachments = json1.map((row) => {
      return {
        link: `https://kloun.lol/joke/${row._id}/`,
        name: row.cat,
        picture: `https://kloun.lol/api/story/${row._id}/`,
      };
    });

    fetch(`https://graph.facebook.com/v14.0/me/feed?access_token=${token}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        link: `https://kloun.lol/joke/${id}/`,
        og_action_type_id: '383635058339457',
        og_object_id: '140035382814582',
        og_icon_id: '202857099862987',
        child_attachments,
        actions: [
          {
            link: `https://kloun.lol/joke/${id}/`,
            name: 'Прочети',
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  });
