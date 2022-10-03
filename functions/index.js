const { Client, LogLevel } = require('@notionhq/client');

const { NOTION_API_TOKEN, NOTION_DATABASE_ID } = process.env;

async function addEmail(email) {
  // Initialize Notion client
  const notion = new Client({
    auth: NOTION_API_TOKEN,
    logLevel: LogLevel.DEBUG,
  });

  await notion.pages.create({
    parent: {
      database_id: NOTION_DATABASE_ID,
    },
    properties: {
      Email: {
        title: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
    },
  });
}

function validateEmail(email) {
    const emailRegex = new RegExp(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      );
  return emailRegex.test(String(email).toLowerCase());
}

module.exports.handler = async function (event, context) {
    // Check the request method
    if (event.httpMethod != 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    // Get the body
    try {
        var body = JSON.parse(event.body);
    } catch (err) {
        return {
        statusCode: 400,
        body: err.toString(),
        };
        return;
    }

    // Validate the email
    const { email } = body;
    if (!validateEmail(email)) {
        return { statusCode: 400, body: 'Email is not valid' };
    }

    // Store email in Notion
    await addEmail(email);
    return { statusCode: 200, body: 'ok' };
};